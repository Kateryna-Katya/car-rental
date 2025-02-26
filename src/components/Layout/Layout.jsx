import { Suspense } from "react";
import Header from "../Header/Header";


const Layout = ({ children }) => {

  return (
 <div>
    <Header />
      <Suspense fallback={<div>Завантаження...</div>}>
        {children}
      </Suspense>
 </div>
  );
};

export default Layout;