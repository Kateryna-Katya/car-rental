import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllCarsList from "../../components/AllCarsList/AllCarsList";

import { fetchAllCars } from "../../redux/cars/operation.js";
import style from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader";
import { selectLoading } from "../../redux/cars/selectors.js";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton.jsx";
import CarFiltersForm from "../../components/CarFiltersForm/CarFiltersForm.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllCars(page));
  }, [dispatch, page]);

  return (
    <div className={style.catalogContainer}>
      {loading && <Loader />}
      <CarFiltersForm />
      <AllCarsList />
      <LoadMoreButton page={page} setPage={setPage} />
    </div>
  );
};

export default CatalogPage;
