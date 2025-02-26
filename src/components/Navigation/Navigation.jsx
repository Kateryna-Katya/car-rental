import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"


const isActive=({isActive})=>{
    return isActive ? style.active:"";

}
const Navigation =()=>{
    return (
        <nav>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <NavLink className={isActive} to="/">
                    Home
                    </NavLink>
                </li>
                <li className={style.navItem}>
                    <NavLink className={isActive} to="/catalog">
                    Catalog
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;