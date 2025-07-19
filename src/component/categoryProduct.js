import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './categoryProduct.css';
import styled from 'styled-components';
import { CartContext } from './cartContext';


const ProductTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #222;
  margin-bottom: 6px;
`;

export const CategoryProduct = ({ id, title, image, price, stock, oldprice }) => {
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);

  const handleAddToCart = () => {
    if (typeof addProduct === 'function') {
      addProduct({ id, title, price, image });
      alert(`🛒 ${title} ajouté au panier !`);
      debugger ;
    } else {
      console.error('addProduct n’est pas une fonction valide.');
    }
  };

  return (
    <>
  
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={`./assets/${image}`} alt={title} className="product-image" />

        <div className="discount-badge">-34%</div>
        <div className="new-badge">NOUVEAU</div>
        <div className="promo-badge">PROMO</div>

        <button className="add-to-cart-btn1" onClick={handleAddToCart}>
          🛒 AJOUTER AU PANIER
        </button>

        <button className="add-to-cart-btn" onClick={() => navigate(`/products/${id}`)}>
          Voir Produit
        </button>
      </div>

      <div className="product-info">
        <ProductTitle>{title}</ProductTitle>
        <p className="product-sub">SOINS CONTOURS YEUX</p>
        <p className="product-price">
          <span className="old-price">{oldprice} MAD</span>&nbsp;
          <span className="new-price">{price} MAD</span>
        </p>
      </div>
    </div>
     </>
  );
};

export default CategoryProduct;
