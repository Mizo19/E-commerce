import React from 'react';
import ReactDOM from 'react-dom/client';
import CartProvider from './component/cartContext';

import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         
      <BrowserRouter>   
     <CartProvider>  
        <AppRoutes />   
        </CartProvider>  
      </BrowserRouter>
    
  </React.StrictMode>
);