import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setFilters } from "../../redux/filters/slice";
import {  selectAllBrands } from "../../redux/cars/selectors";
import { Formik, Form, Field } from "formik";
import { fetchAllBrands, fetchAllCars, fetchFilteredCars } from "../../redux/cars/operation";
import style from "./CarFiltersForm.module.css";
import Icon from "../Icon";

const CarFiltersForm = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectAllBrands) || [];
 
  const [brandOpen, setBrandOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllBrands());
  }, [dispatch]);

  return (
    <div>
      <Formik
        initialValues={{ brand: "", rentalPrice: "", minMileage: "", maxMileage: "" }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(setFilters(values));
          dispatch(fetchFilteredCars(values));
          setSubmitting(false);
        }}
      >
        {({ values, resetForm }) => (
          <Form className={style.form}>
            
        <div className={style.inputContainer}>
            <div className={style.selectContainer}>
              <label className={style.label} htmlFor="brand">Car brand</label>
              <div className={style.selectWrapper}>
                <Field 
                  className={style.field} 
                  as="select" 
                  id="brand" 
                  name="brand"
                  onFocus={() => setBrandOpen(true)}
                  onBlur={() => setBrandOpen(false)}
                >
                  <option value="">Choose a brand</option> 
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </Field>
                <div className={style.arrow}>
                  <Icon 
                    id={brandOpen ? "icon-arrow-up" : "icon-arrow-down"} 
                    width={16} 
                    height={16} 
                   
                  />
                </div>
              </div>
            </div>

     
            <div className={style.selectContainer}>
              <label className={style.label} htmlFor="price">Price/ 1 hour</label>
              <div className={style.selectWrapper}>
                <Field 
                  className={style.field} 
                  as="select" 
                  id="price" 
                  name="rentalPrice"
                  onFocus={() => setPriceOpen(true)}
                  onBlur={() => setPriceOpen(false)}
                >
                  <option value="">Choose a price</option>
                  {[10, 20, 30, 40, 50, 60, 70, 80].map((price) => (
                    <option key={price} value={price}>To ${price}</option>
                  ))}
                </Field>
                <div className={style.arrow}>
                  <Icon 
                    id={priceOpen ? "icon-arrow-up" : "icon-arrow-down"} 
                    width={16} 
                    height={16} 
                  />
                </div>
              </div>
            </div>
            

          
            <div className={style.labelContainer}> 
              <label className={style.label} htmlFor="maxMileage">Car mileage / km</label>
             <div className={style.mileage}>
              <Field className={style.fieldMin} type="number" id="minMileage" name="minMileage" placeholder="From" value={values.minMileage || ""} />
              <Field className={style.fieldMax} type="number" id="maxMileage" name="maxMileage" placeholder="To" value={values.maxMileage || ""} />
            </div>
</div>
          
           <div className={style.buttons}>
              <button className={style.buttonStyle} type="submit">Search</button>
              <button 
              className={style.buttonStyle}
                type="button" 
                onClick={() => {
                  resetForm();
                  dispatch(setFilters({}));
                  dispatch(fetchAllCars({}));
                }}
              >
                Reset
              </button>
            </div></div>
          </Form>
        )}
      </Formik>

      
    </div>
  );
};

export default CarFiltersForm;
