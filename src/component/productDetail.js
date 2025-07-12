import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../fetcher';




const ProductDetail = () => {
const [product , setProduct]=React.useState( { errorMessage: '' , data :{} });
    const {productId} = useParams();
   React.useEffect(() =>{
    const fetchData =async ()  =>  {
    const responseObject = await getProductById(productId) 
    setProduct(responseObject) ;
    }
   fetchData();
   }  , [productId] )
  return (
   <article className="category-product-container">
     <div className="category-product-title">
{product.data.title}
</div>

      <div className="category-product-grid">
        {/* Column 1: Image */}
        <figure className="category-product-image-container">
          <img src={`/assets/${product.data.image}`} alt={product.data.title} />
        </figure>

        {/* Column 2: Specs & Features */}
        <div>
          <div className="category-product-info-dimension">
            <h3>Dimensions</h3>
            <label></label>
          </div>
         
       
          <div className="category-product-info-features">
            <h3>Features</h3>
            <ul>
              {product.data.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Price & Actions */}
        <aside className="category-product-finance">
          <div className="category-product-finance-price" > د.م {product.data.price} </div>
          <div className="category-product-info-stock">
            <label>Disponibilité stock: {product.data.stock}</label>
            <label>Livraison gratuit</label>
          </div>
          <div className="category-product-action">
           
        <button>Add to basket</button>
       
          </div>
        </aside>
      </div>
       <div> {product.data?.description}</div>
    </article> 

  )
}

export default ProductDetail