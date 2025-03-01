import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redax/filters/slice.js";
import NavButton from "../NavButton/NavButton"
import style from "./AllCarsItem.module.css"
import { selectAllFavourites } from "../../redax/filters/selectors.js";
import Icon from "../Icon"




const AllCarsItem = ({
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  }) => {
    const dispatch=useDispatch();
    const favourites=useSelector(selectAllFavourites);
    const isFavourite=favourites.some((car)=>car.id===id);
    const handleFavourite=()=>{
      if (isFavourite){
        dispatch(removeFromFavorites(id));
      }else{
        dispatch(addToFavorites({id, img, brand, model, year, rentalPrice}))
      }
    }
    const editMileage = mileage => {
      const splited = mileage.toString().split('');
      splited.splice(1, 0, ' ');
      return splited.join('');
    };
  
    const capitalizeText = text => {
      const splited = text.toLowerCase().split('');
      splited[0] = splited[0].toUpperCase();
      return splited.join('');
    };
    return(
        <li className={style.item}>
    <div className={style.carItem}>
      <div className={style.imgContainer}>
      <img src={img} alt={`${brand} ${model}`} className={style.carImage} />
      <button className={style.favouriteButton} onClick={handleFavourite}>
        {isFavourite?(
          <Icon id="icon-Property-Active" width={16} height={16}/>
        ):(<Icon id="icon-heart" width={16} height={16}/>          
        )}
      </button>
      </div>
      <div className={style.carInfo}>
        <h3>{brand}<span className={style.model}>{model}</span>, {year}</h3>
        <p> ${rentalPrice} </p>
        </div>
        <ul className={style.carInfoList}>
        <li className={style.carInfoItem}>{address.split(',')[1]}</li>
        <li className={style.carInfoItem}>{address.split(',')[2]}</li>
        <li className={style.carInfoItem}>{rentalCompany}</li>
        </ul>
        <ul className={style.carInfoList}>
        <li className={style.carInfoItem}>{capitalizeText(type)}</li>
        <li className={style.carInfoItem}>{editMileage(mileage)} km</li>  
        </ul>
              
        <NavButton to={`/cars/${id}`}>Read More</NavButton>
        
        </div>
        </li>
    )

}
export default AllCarsItem;