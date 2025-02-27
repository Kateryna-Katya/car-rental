import { useNavigate } from "react-router-dom";
import style from "./NavButton.module.css"

const NavButton=({to,children})=>{
    const navigate = useNavigate();
    return(
        <button onClick={()=>navigate(to)} className={style.homeButton}>{children}</button>
    )
}

export default NavButton;
