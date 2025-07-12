import React, { useEffect, useState } from 'react';
import './App.css';

import { fetcher } from './fetcher';
import CategoryProduct from './component/categoryProduct';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsInstagram } from 'react-icons/bs';
import { BsTiktok } from 'react-icons/bs';
import Footer from './component/Footer';
import CategoryMenu from './component/categoryMenu'

import './NosPartenaires.css'



const images = [
  "./assets/bnsar.png",
  "./assets/slider-eucerin.jpg",
  "./assets/1.png",
];

function App() {
  const [categories, setCategories] = useState({errorMessage:'' , data: [] });
  const [products, setProducts] = useState({errorMessage:'' , data: [] });

   const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await fetcher("/categories");
      setCategories(responseObject);
    };
    fetchData(); // ✅ call it outside the function
  }, []);
useEffect(() => {
  if (categories.data.length > 0) {
    handleCategoryClick(1); // Load category 1 by default
  }
}, [categories]);
  const handleCategoryClick = (id) => {
    const fetchData = async () => {
      
      const responseObject = await fetcher("/products?catId=" +id);
      setProducts(responseObject);
    }
    fetchData(); 
  }







 const renderProducts = () => {
  return products.data.map((p) => (
    <CategoryProduct key={p.id} {...p}>
      {p.title}
    </CategoryProduct>
  ));
};

  return (
    <React.Fragment>
   <header style={{ color: 'white', padding: '20px', textAlign: 'center' }}>
   <div>
  <img src="/assets/transparent.png" alt="Logo"  width="250" height="auto"/>  
</div>
 <p style={{ fontSize: '25px', fontWeight :'bold'   }}>
  Votre destination santé et bien-être : produits dermatologiques, soins naturels, hygiène <br />et compléments alimentaires.<br />
  <span style={{ fontStyle: 'italic', fontSize: '18px', color: '#a0e7ff' }}>
    Livraison gratuite pour toute commande sur Casablanca   <br />
  🎵 mail  : @parapharmacie_awabain@gmail.com 
     </span>
  
</p>
<div style={{alignitem :" alignItems: 'left'"}}>
 <  FaWhatsappSquare style={{ marginRight: '8px', fontSize: '48px' ,color :'white' }}/>   
   <a 
  href="https://www.instagram.com/para_essentielle/" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }}
>
  <BsInstagram 
    style={{ 
      marginRight: '8px', 
      fontSize: '48px', 
      color: 'white', 
      cursor: 'pointer' 
    }} 
  />
</a>
        <BsTiktok style={{ marginRight: '8px', fontSize: '48px' ,color :'white', }}/> 
 </div>
  
</header>
<br/>
<nav>
 <div  >

  <CategoryMenu
    categories={categories.data}
    onCategoryClick={handleCategoryClick}
  />

</div>
<br/>
<br/>
</nav>
    {/* Advertising Slider */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {images.map((src, idx) => (
            <div key={idx}>
              <img src={src} alt={`pub-${idx}`} />
            </div>
          ))}
        </Slider>
      </div>
      <section>
      
     
        <main>
          <div className='product-list'>{ products && renderProducts()}</div>
        </main>

      </section>
               <div className="partenaires-container">
      <h2 > 🤝 Nos Prestigieux Marque </h2>
      <div className="logos-scroll">
        <img src="/assets/partner1.jpg" alt="Partenaire 1" />
        <img src="/assets/partner2.jpg" alt="Partenaire 2" />
        <img src="/assets/partner3.png" alt="Partenaire 3" />
        <img src="/assets/partner4.png" alt="Partenaire 4" />
        <img src="/assets/partner5.png" alt="Partenaire 6" />
        <img src="/assets/partner6.png" alt="Partenaire 6" />
        <img src="/assets/partner7.png" alt="Partenaire 7" />
        <img src="/assets/partner1.jpg" alt="Partenaire 1" />
        <img src="/assets/partner2.jpg" alt="Partenaire 2" />
        <img src="/assets/partner3.png" alt="Partenaire 3" />
        <img src="/assets/partner4.png" alt="Partenaire 4" />
        <img src="/assets/partner5.png" alt="Partenaire 6" />
        <img src="/assets/partner6.png" alt="Partenaire 6" />
        <img src="/assets/partner7.png" alt="Partenaire 7" />
        {/* Ajoute d'autres logos ici */}
      </div>
    </div>
   <div>

    <Footer/>
   </div>

    </React.Fragment>
  );
}

export default App;
