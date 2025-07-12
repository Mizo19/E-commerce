import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import ProductDetail from './component/productDetail';
import Checkout from './component/checkout';
import Basket from './component/basket';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
      
      <Route path="/" element={<App />} />
      
      <Route path="products/:productId" element={<ProductDetail />} />
       <Route path="Checkout" element={<Checkout />} />
        <Route path="Basket"  element={<Basket/>} />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
