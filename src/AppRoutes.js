// AppRoutes.js
import { Routes, Route  } from 'react-router-dom';
import Basket from './component/basket';
import ProductDetail from './component/productDetail';
import Home from './Home'; // tu peux renommer App -> Home

const AppRoutes = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="/basket" element={<Basket />} />
    
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  
  );
};

export default AppRoutes;
