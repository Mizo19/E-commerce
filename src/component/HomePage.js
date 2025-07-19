// component/HomePage.js
import React from 'react';
import CategoryProduct from './categoryProduct';
import CategoryMenu from './categoryMenu';
import Slider from 'react-slick';
import Guarantees from './Guarantees';
import Sidebar from './sidebar';
import Footer from './Footer';
import { FaWhatsappSquare } from "react-icons/fa";
import { BsInstagram, BsTiktok } from 'react-icons/bs';
import { Menu } from "lucide-react";
import Header from './Header';


const images = [
  "./assets/loyality.jpg",
  "./assets/slider-eucerin.jpg",
  "./assets/bnsar.png",
];

const HomePage = ({
  categories,
  products,
  sidebarOpen,
  toggleSidebar,
  handleCategoryClick
}) => {

  const renderProducts = () =>
    products.map((p) => (
      <CategoryProduct key={p.id} {...p}>
        {p.title}
      </CategoryProduct>
    ));

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Sidebar
        isOpen={sidebarOpen}
        toggle={toggleSidebar}
        categories={categories}
        onCategoryClick={(id) => {
          handleCategoryClick(id);
          toggleSidebar();
        }}
      />

      <Header/>

      <nav>
        <CategoryMenu categories={categories} onCategoryClick={handleCategoryClick} />
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
          <img src="/assets/ads1.jpg" alt="ad" />
        </div>
      </div>

      <Guarantees />

      <main>
        <div className="product-list">{renderProducts()}</div>
      </main>

      <div className="partenaires-container">
        <h2> 🤝 Nos Prestigieux Marque </h2>
        <div className="logos-scroll">
          {[...Array(2)].flatMap(() => [
            "partner1.jpg", "partner2.jpg", "partner3.png",
            "partner4.png", "partner5.png", "partner6.png", "partner7.png"
          ]).map((img, i) => (
            <img key={i} src={`/assets/${img}`} alt={`partenaire ${i}`} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
