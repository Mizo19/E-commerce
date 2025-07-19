import React, { useEffect, useState } from 'react';
import './App.css';

import { fetcher } from './fetcher';
import CategoryProduct from './component/categoryProduct';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsInstagram, BsTiktok } from 'react-icons/bs';
import Footer from './component/Footer';
import CategoryMenu from './component/categoryMenu';
import Guarantees from './component/Guarantees';
import './NosPartenaires.css';
import Sidebar from './component/sidebar';
import { useNavigate } from 'react-router-dom';
import { Menu } from "lucide-react";
import { SlBasket } from "react-icons/sl";

const images = [
  "./assets/loyality.jpg",
  "./assets/slider-eucerin.jpg",
  "./assets/bnsar.png",
];

function Header({ toggleSidebar, sidebarOpen, categories, handleCategoryClick }) {
  const navigate = useNavigate();

  const goToBasket = () => {
    navigate('/basket');  // Navigate programmatically
  };

  return (
    <>
      <Sidebar
        isOpen={sidebarOpen}
        toggle={toggleSidebar}
        categories={categories || []}
        onCategoryClick={(id) => {
          handleCategoryClick(id);
          toggleSidebar();
        }}
      />
      <header style={{ color: 'white', padding: 20, textAlign: 'center', position: 'relative' }}>
        <button
          onClick={toggleSidebar}
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Menu size={30} color="black" />
        </button>

        <div>
          <img
            src="/assets/transparent.png"
            alt="Logo"
            style={{ marginLeft: 60 }}
            width={250}
            height="auto"
          />
        </div>

        <p style={{
          fontSize: 25,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          color: 'green',
          lineHeight: 1.6
        }}>
          Votre destination santé et bien-être : produits dermatologiques, soins naturels, hygiène <br />
          et compléments alimentaires.<br />
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 18,
            color: 'black',
            fontWeight: 'normal'
          }}>
            Livraison gratuite pour toute commande sur Casablanca <br />
            🎵 mail : @parapharmacie_awabain@gmail.com
          </span>
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FaWhatsappSquare style={{ marginRight: 8, fontSize: 25, color: 'black' }} />
          <a
            href="https://www.instagram.com/para_essentielle/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <BsInstagram
              style={{
                marginRight: 8,
                fontSize: 25,
                color: 'black',
                cursor: 'pointer'
              }}
            />
          </a>
          <BsTiktok style={{ marginRight: 8, fontSize: 25, color: 'black' }} />
           <SlBasket 
            onClick={goToBasket}
            style={{ marginLeft: 16, fontSize: 32, color: 'black', cursor: 'pointer' , position : 'right'}}
            title="Go to Basket"
            aria-label="Basket"
          />
         
        </div>
        
      </header>
    </>
  );
}

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });
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
    fetchData();
  }, []);

  useEffect(() => {
    if (categories.data.length > 0) {
      handleCategoryClick(1);
    }
  }, [categories]);

  const handleCategoryClick = (id) => {
    const fetchData = async () => {
      const responseObject = await fetcher("/products?subCatId=" + id);
      setProducts(responseObject);
    };
    fetchData();
  };

  const renderProducts = () => {
    return products.data.map((p) => (
      <CategoryProduct key={p.id} {...p}>
        {p.title}
      </CategoryProduct>
    ));
  };

  return (
    <>
      <Header
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
        categories={categories.data}
        handleCategoryClick={handleCategoryClick}
      />

      <nav>
        <CategoryMenu
          categories={categories.data}
          onCategoryClick={handleCategoryClick}
        />
      </nav>

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

        <div className="side-image">
          <img src="/assets/ads1.jpg" alt="right ad" />
        </div>
      </div>

      <Guarantees />

      <section>
        <main>
          <div className='product-list'>{products && renderProducts()}</div>
        </main>
      </section>

      <div className="partenaires-container">
        <h2>🤝 Nos Prestigieux Marque</h2>
        <div className="logos-scroll">
          {/* Add logos as you have */}
          <img src="/assets/partner1.jpg" alt="Partenaire 1" />
          <img src="/assets/partner2.jpg" alt="Partenaire 2" />
          {/* ... */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;