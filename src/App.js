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
import Guarantees from './component/Guarantees';
import './NosPartenaires.css'
import Sidebar from './component/sidebar';
import { Menu } from "lucide-react";



const images = [

  "./assets/loyality.jpg",
  "./assets/slider-eucerin.jpg",
  "./assets/bnsar.png",
];

function App() {
  const [categories, setCategories] = useState({errorMessage:'' , data: [] });
  const [products, setProducts] = useState({errorMessage:'' , data: [] });
  const [sidebarOpen, setSidebarOpen] = useState(false);
const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
     <Sidebar
  isOpen={sidebarOpen}
  toggle={toggleSidebar}
  categories={categories.data || []} // ensures it's always an array
  onCategoryClick={(id) => {
    handleCategoryClick(id);
    toggleSidebar(); // optional: close sidebar after click
  }}
/>
   <header style={{ color: 'white', padding: '20px', textAlign: 'center', position: 'relative' }}>
    <button 
        onClick={toggleSidebar}
        style={{ 
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <Menu size={30} color="black" />
      </button>

   <div>
  <img 
    src="/assets/transparent.png" 
    alt="Logo"  
    style={{ marginLeft: '60px' }} // add enough margin to avoid overlap
    width="250" 
    height="auto"
  />  
</div>
 <p style={{ 
  fontSize: '25px', 
  fontFamily: 'Poppins, sans-serif', 
  fontWeight: 'bold', 
  color: 'green',
  lineHeight: '1.6'
}}>
  Votre destination santé et bien-être : produits dermatologiques, soins naturels, hygiène <br />
  et compléments alimentaires.<br />
  <span style={{ 
    fontFamily: 'Poppins, sans-serif', 
    fontSize: '18px', 
    color: 'black', 
    fontWeight: 'normal'
  }}>
    Livraison gratuite pour toute commande sur Casablanca <br />
    🎵 mail : @parapharmacie_awabain@gmail.com
  </span>
</p>

<div style={{alignitem :" alignItems: ' left'"}}>
<br/>
<br/>

 <  FaWhatsappSquare style={{ marginRight: '8px', fontSize: '25px' ,color :'black' }}/>   
   <a 
  href="https://www.instagram.com/para_essentielle/" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }}
>
  <BsInstagram 
    style={{ 
      marginRight: '8px', 
      fontSize: '25px', 
      color: 'black', 
      cursor: 'pointer' 
    }} 
  />
</a>
        <BsTiktok style={{ marginRight: '8px', fontSize: '25px' ,color :'black', }}/> 
 </div>
  
</header>
<br/>
<nav >


  <CategoryMenu
    categories={categories.data}
    onCategoryClick={handleCategoryClick}
  />


<br/>


</nav>
<br/>
   
 
  <div className="ads-layout">
 
  <div className="slider-container">
    <Slider {...sliderSettings}>
      {images.map((src, idx) => (
        <div key={idx}>
          <img src={src} alt={`pub-${idx}`} />
        </div>
      ))}
    </Slider>
  </div>
<p>&nbsp;&nbsp;&nbsp;</p>
  <div className="side-image">
    <img src="/assets/ads1.jpg" alt="right ad" /> 


  </div>
</div>
      <div>
  <Guarantees />
</div>
<br/>
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