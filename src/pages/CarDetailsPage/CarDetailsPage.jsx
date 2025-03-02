import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CarDetailsPage=()=> {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const [
    {
      img,
      brand,
      model,
      year,
      address,
      mileage,
      rentalPrice,
      rentalConditions,
      accessories,
      functionalities,
      type,
      engineSize,
      fuelConsumption,
    },
    setCarInfo,
  ] = useState({});

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/cars/${id}`);

        setCarInfo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarInfo();
  }, [id]);
  return (
    <div>CarDetailsPage</div>
  )
}

export default CarDetailsPage