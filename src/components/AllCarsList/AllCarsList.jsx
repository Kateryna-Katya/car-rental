import { useSelector } from "react-redux";
import { selectAllCars } from "../../redax/cars/selectors";
import AllCarsItem from "../AllCarsItem/AllCarsItem.jsx";
import style from "./AllCarsList.module.css"


const AllCarsList=()=>{
    const allCars=useSelector(selectAllCars);
    console.log(allCars)

    return(
        <ul className={style.carList}>
            {Array.isArray(allCars)&&allCars.length===0&&(
                <li className={style.carNotFound}>Sorry, the car you need is not available.</li>
            )}
            {Array.isArray(allCars)&&allCars.length!==0&&allCars.map(car=>{
                return <AllCarsItem key={car.id}{...car}/>
            })}
        </ul>
    )
}


export default AllCarsList


