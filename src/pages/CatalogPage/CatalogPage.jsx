import { useEffect, useState,  } from "react"
import { useDispatch, useSelector, } from "react-redux"
import AllCarsList from "../../components/AllCarsList/AllCarsList"

import { fetchAllCars } from "../../redax/cars/operation"
import style from "./CatalogPage.module.css"
import Loader from "../../components/Loader/Loader"
import { selectLoading } from "../../redax/cars/selectors"

const CatalogPage=()=>{
  const dispatch=useDispatch();
  const loading = useSelector(selectLoading);
  const [page, setPage]=useState(1);

  useEffect(()=>{
    dispatch(fetchAllCars(page));
  },[dispatch,page])

  return (
    <div className={style.catalogContainer}>
      {loading && <Loader/>}
      <AllCarsList/>
    </div>
  )
}

export default CatalogPage