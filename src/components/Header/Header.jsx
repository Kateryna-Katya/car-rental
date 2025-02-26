import { Link } from "react-router-dom";
import Icon from "../Icon"
import Navigation from "../Navigation/Navigation";
import style from './Header.module.css'

const Header =()=>{
    return(
       <header className={style.header}>
        <Link to="/">
        <Icon id="icon-favicon-2" width={101} height={16}/>
        </Link>
        <Navigation/>
       </header>
    )
}
export default Header;