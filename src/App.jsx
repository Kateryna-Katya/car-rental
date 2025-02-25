import { lazy} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CarDetailsPage = lazy(() => import("./pages/CarDetailsPage/CarDetailsPage"));

const App=()=> {
 

  return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CarDetailsPage />} />
     </Routes>
     </Router>
    </>
  )
}

export default App
