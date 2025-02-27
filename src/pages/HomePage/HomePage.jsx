import NavButton from "../../components/NavButton/NavButton";
import style from './HomePage.module.css'

const HomePage=()=>{
  return (
    <div className={style.homePage}>
      <div className={style.container}>
      <h1 className={style.homeTitle}>Find your perfect rental car</h1>
      <p className={style.homeText}>Reliable and budget-friendly rentals for any journey</p>
      <NavButton to="/catalog" className={style.linkButton}>View Catalog</NavButton>
      </div>
    </div>
  )
}

export default HomePage





