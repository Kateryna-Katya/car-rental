import { lazy} from "react";
import { Routes, Route } from "react-router-dom";;
import './App.css'
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CarDetailsPage = lazy(() => import("./pages/CarDetailsPage/CarDetailsPage"));

const App=()=> {
 

  return (
    <>
    
    <Layout>    
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CarDetailsPage />} />
     </Routes>     
     </Layout>
     
    </>
  )
}

export default App
