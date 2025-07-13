import React from 'react'
import {Link , useNavigate} from 'react-router-dom';



export const CategoryProduct = ({ id ,title, image, specs, features, price, stock }) => {
    const navigate =useNavigate();
  return (
  
    <article className="category-product-container">
     

      <div className="category-product-grid">
        {/* Column 1: Image */}
        <figure className="category-product-image-container">
          <img src={`./assets/${image}`} alt={title} />
        </figure>

        
            <div className="category-product-title">
  <Link to={`/products/${id}`}>{title}</Link>
</div>
        {/* Column 3: Price & Actions */}
        <aside className="category-product-finance">
          <div className="category-product-finance-price" > {price} DHS </div>
          <div className="category-product-info-stock">
            <label>Disponibilité stock: {stock}</label>
            <label>Livraison gratuit</label>
          </div>
          <div className="category-product-action">
            <button onClick={()=> navigate(`/products/${id}`)}>View Product</button>
            <button>🛒 J'achete </button>

          </div>
        </aside>
      </div>
    </article>
  );
};

export default CategoryProduct;
