import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import Loader from "../../components/Loader/Loader";
import Icon from "../../components/Icon";
import AllCarsList from "../../components/AllCarsList/AllCarsList";
import style from "./CarDetailsPage.module.css";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

const editMileage = (mileage) => mileage?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") || "N/A";
const capitalizeText = (text) => text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

const CarDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [carInfo, setCarInfo] = useState(null);
  const { id } = useParams();
  

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        setLoading(true);
        setCarInfo(null); 
        const { data } = await axios.get(`/cars/${id}`);
        console.log("Car data from API:", data);
        setCarInfo(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarInfo();
  }, [id]);

  if (loading) return <Loader />;
  if (!carInfo) return <p className={style.error}>Car not found.</p>;

  const {
    img, brand, model, year, address, mileage,
    rentalPrice, rentalConditions, accessories,
    functionalities, type, engineSize, fuelConsumption
  } = carInfo;

  return (
    <div className={style.carDetailsPage}>
      <div className={style.imageFormWrapper}>
        <div className={style.imageWrapper}>
          <img className={style.carDetailsImage} src={img} alt={`${brand} ${model}`} />
        </div>
        <ApplicationForm brand={brand} model={model} />
      </div>

      <div className={style.carInfo}>
        <h2 className={style.title}>{brand} {model}, {year}</h2>
        <div className={style.locationMileage}>
          <Icon id="icon-location" width={16} height={16} />
          <span className={style.location}>
            {address ? address.split(",")[1] + ", " + address.split(",")[2] : "N/A"}
          </span>
          <span className={style.mileage}>Mileage: {editMileage(mileage)} km</span>
        </div>
        <div className={style.price}>${rentalPrice || "N/A"}</div>
        <p className={style.description}>
          The {brand} {model} is a stylish and spacious car known for its
          comfortable ride and luxurious features.
        </p>
        <ul className={style.carInfoList}>
          <li>
            <h3 className={style.subtitle}>Rental Conditions:</h3>
            <AllCarsList 
             rentalConditions={Array.isArray(rentalConditions) ? rentalConditions : rentalConditions ? [rentalConditions] : []}/>
              <Icon id="icon-check-circle" width={16} height={16} />
            
          </li>
          <li>
            <h3 className={style.subtitle}>Car Specifications:</h3>
            <ul>
              <li className={style.listItem}>
                <Icon id="icon-calendar" width={16} height={16} />
                Year: {year || "N/A"}
              </li>
              <li className={style.listItem}>
                <Icon id="icon-car" width={16} height={16} />
                Type: {capitalizeText(type)}
              </li>
              <li className={style.listItem}>
                <Icon id="icon-fuel-pump" width={16} height={16} />
                Fuel Consumption: {fuelConsumption || "N/A"}
              </li>
              <li className={style.listItem}>
                <Icon id="icon-gear" width={16} height={16} />
                Engine Size: {engineSize || "N/A"}
              </li>
            </ul>
          </li>
          <li>
            <h3 className={style.subtitle}>Accessories and functionalities:</h3>
            <AllCarsList
              accessories={accessories?.concat(functionalities) || []}/>
             
             <Icon id="icon-check-circle" width={16} height={16} />          
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarDetailsPage;

