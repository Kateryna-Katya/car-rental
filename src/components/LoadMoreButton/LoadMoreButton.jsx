import { useSelector } from "react-redux";
import style from "./LoadMoreButton.module.css";
import { selectTotalPages } from "../../redux/cars/selectors";

const LoadMoreButton = ({ page, setPage }) => {
  const totalPages = useSelector(selectTotalPages);

  return (
    <>
      {totalPages !== null && totalPages > page && (
        <button
          className={style.loadMoreButton}
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          LoadMore
        </button>
      )}
    </>
  );
};

export default LoadMoreButton;
