import { Link } from "react-router-dom";
import style from "./NavButton.module.css";

const NavButton = ({ children, to  }) => {
  return (
    <Link to={to} className={style.homeButton}>
      {children}
    </Link>
  );
};

export default NavButton;
