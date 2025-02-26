import { Link } from "react-router-dom";
import style from './HomePage.module.css'

const HomePage=()=>{
  return (
    <div className={style.homePage}>
      <h1 className={style.homeTitle}>Find your perfect rental car</h1>
      <p className={style.homeText}>Reliable and budget-friendly rentals for any journey</p>
      <Link to="/catalog">
      <button className={style.homeButton}>View Catalog</button>
      </Link>
    </div>
  )
}

export default HomePage





