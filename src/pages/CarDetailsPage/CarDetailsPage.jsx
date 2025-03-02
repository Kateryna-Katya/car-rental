import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import Loader from "../../components/Loader/Loader";
import Icon from "../../components/Icon";
import AllCarsList from "../../components/AllCarsList/AllCarsList";

import style from "./CarDetailsPage.module.css";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

const editMileage = (mileage) => {
  return mileage?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") || "N/A";
};

const capitalizeText = (text) => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";
};

const CarDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [carInfo, setCarInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/cars/${id}`);
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
  } = carInfo;

  return (
    <div className={style.carInfoPage}>
      <div className={style.contentWrapper}>
        <div className={style.imageFormWrapper}>
          <div className={style.imageWrapper}>
            <img className={style.image} src={img} alt={`${brand} ${model}`} />
          </div>
          <ApplicationForm brand={brand} model={model} />
        </div>
        <div className={style.textInfo}>
          <h1 className={style.title}>
            {brand} {model}, {year}{" "}
            <span className={style.id}>Id: {id ? id.slice(0, 5) : "N/A"}</span>
          </h1>
          <div className={style.locationMileage}>
            <Icon name={"location"} width={12} height={15} />
            <span className={style.location}>
              {address ? address.split(",")[1] + ", " + address.split(",")[2] : "N/A"}
            </span>
            <span className={style.mileage}>Mileage: {editMileage(mileage)} km</span>
          </div>
          <div className={style.price}>${rentalPrice || "N/A"}</div>
          <p className={style.desc}>
            The {brand} {model} is a stylish and spacious car known for its
            comfortable ride and luxurious features.
          </p>
          <ul className={style.carInfoGeneralList}>
            <li>
              <h2 className={style.listTitle}>Rental Conditions:</h2>
              <AllCarsList
  items={Array.isArray(rentalConditions) ? rentalConditions : rentalConditions ? [rentalConditions] : []}
  icon={<Icon name={"check-circle"} width={16} height={16} />}
/>
            </li>
            <li>
              <h2 className={style.listTitle}>Car Specifications:</h2>
              <ul>
                <li className={style.listItem}>
                  <Icon name={"calendar"} width={16} height={16} />
                  Year: {year || "N/A"}
                </li>
                <li className={style.listItem}>
                  <Icon name={"car"} width={16} height={16} />
                  Type: {capitalizeText(type)}
                </li>
                <li className={style.listItem}>
                  <Icon name={"fuel-pump"} width={16} height={16} />
                  Fuel Consumption: {fuelConsumption || "N/A"}
                </li>
                <li className={style.listItem}>
                  <Icon name={"gear"} width={16} height={16} />
                  Engine Size: {engineSize || "N/A"}
                </li>
              </ul>
            </li>
            <li>
              <h2 className={style.listTitle}>Accessories and functionalities:</h2>
              <AllCarsList
                items={accessories?.concat(functionalities) || []}
                icon={<Icon name={"check-circle"} width={16} height={16} />}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
