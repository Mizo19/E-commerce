// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsappSquare } from "react-icons/fa";
import { BsInstagram, BsTiktok } from 'react-icons/bs';
import Sidebar from './sidebar';
import { Menu } from "lucide-react";
import { SlBasket } from "react-icons/sl";

function Header({ toggleSidebar, sidebarOpen, categories, handleCategoryClick }) {
  const navigate = useNavigate();

  const goToBasket = () => {
    navigate('/basket');
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
          <BsTiktok style={{ marginRight: 8, fontSize: 25, color: 'black' }} /> <br/>
          <SlBasket 
            onClick={goToBasket}
            style={{ marginLeft: 16, fontSize: 28, color: 'black', cursor: 'pointer' }}
            title="Go to Basket"
            aria-label="Basket"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
