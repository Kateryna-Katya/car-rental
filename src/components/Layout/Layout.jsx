import { Suspense } from "react";
import Header from "../Header/Header";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.loyoutContainer}>
      <Header />
      <Suspense fallback={<div>Завантаження...</div>}>{children}</Suspense>
    </div>
  );
};

export default Layout;
