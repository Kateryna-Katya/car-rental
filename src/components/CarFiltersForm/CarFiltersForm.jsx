import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setFilters } from "../../redux/filters/slice";
import { selectAllCars, selectLoading, selectAllBrands } from "../../redux/cars/selectors";
import { Formik, Form, Field } from "formik";
import { fetchAllBrands, fetchAllCars, fetchFilteredCars } from "../../redux/cars/operation";
import SelectMenu from "../SelectMenu/SelectMenu"
import style from "./CarFiltersForm.module.css";


// const mileageInput = (value, word) => {
//   let cleared = value;

//   if (value === word) return '';

//   if (value.startsWith(word)) {
//     cleared = clearMileage(value);
//   }

//   return `${word}${editMileage(cleared, ',')}`;
// };

// const clearMileage = value => {
//   if (!value) return '';

//   return value?.split(' ')[1]?.split(',').join('');
// };

const CarFiltersForm = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectAllBrands);
  const cars = useSelector(selectAllCars);
  const loading = useSelector(selectLoading);
  const [minMileageValue, setMinMileageValue] = useState('');
  const [maxMileageValue, setMaxMileageValue] = useState('');

  useEffect(() => {
    dispatch(fetchAllCars({}));
  }, [dispatch]);

  return (
    <div>
      <Formik
        initialValues={{ brand: "", rentalPrice: "", minMileage: "", maxMileage: "" }}
        onSubmit={(values) => {
          dispatch(fetchFilteredCars(values));
          dispatch(fetchAllCars(1));
         
        }}
      >
        {({ handleChange }) => (
          <Form className={style.form}>
   
            <label className={style.label} htmlFor="brand">Car brand</label>
            <Field as="select" id="brand" name="brand" options={brands} onChange={handleChange}>
   
            </Field>

          
            <label className={style.label} htmlFor="price">Price/ 1 hour</label>
            <Field as="select" id="price" name="rentalPrice" onChange={handleChange}>
              <option value="">Choose a price</option>
              {[10, 20, 30, 40, 50, 60, 70, 80].map((price) => (
                <option key={price} value={price}>To ${price} </option>
              ))}
            </Field>

            <label className={style.label} htmlFor="minMileage">Car mileage / km</label>
            <Field type="number" id="minMileage" name="minMileage" placeholder="From" value={minMileageValue} />
            <Field type="number" id="maxMileage" name="maxMileage" placeholder="To" value={maxMileageValue}/>

         
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>

    
      {loading ? <p>Loading...</p> : cars.map((car) => <p key={car.id}>{car.brand} - {car.model}</p>)}
    </div>
  );
};

export default CarFiltersForm;
