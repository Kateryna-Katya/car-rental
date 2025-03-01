import { useSelector } from "react-redux";
import style from "./LoadMoreButton.module.css";
import { selectTotalPages } from "../../redux/cars/selectors";

const LoadMoreButton = ({ page, setPage }) => {
  const totalPages = useSelector(selectTotalPages);

  return (
    <div className={style.loadMoreContainer}>
      {totalPages !== null && totalPages > page && (
        <button
          className={style.loadMoreButton}
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
