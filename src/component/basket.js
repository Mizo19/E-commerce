import React, { useContext } from 'react';
import { CartContext } from './cartContext';
import './Basket.css';
import Header from './Header';

const Basket = () => {
  const { cartItems, remove, increaseQty, decreaseQty } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="basket-container">
        <h2 className="basket-title">🛒 Ton Panier</h2>

        {cartItems.length === 0 ? (
          <p className="basket-empty">Ton panier est vide 😞</p>
        ) : (
          <>
            <div className="basket-list">
              {cartItems.map((item) => (
                <div className="basket-item" key={item.id}>
                  <div className="item-info">
                    <img className="basket-image" src={`../assets/${item.image}`} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.price} MAD × {item.quantity}</p>
                      <div className="qty-controls">
                        <button onClick={() => decreaseQty(item.id)} className="qty-btn">➖</button>
                        <span className="qty-number">{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)} className="qty-btn">➕</button>
                      </div>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => remove(item.id)}>❌ Retirer</button>
                </div>
              ))}
            </div>

            <div className="basket-total">
              💰 Total du panier : <strong>{totalPrice.toFixed(2)} MAD</strong>
            </div>
          </>
        )}
      </div>

      <div className="basket-conditions">
        <h3>📦 Conditions de livraison & Politique de retour</h3>
        <ul>
          <li><strong>Livraison sur Casablanca :</strong> Gratuite pour toutes les commandes.</li>
          <li><strong>Hors Casablanca :</strong> Frais de livraison applicables selon la région.</li>
          <li><strong>Livraison gratuite partout au Maroc</strong> pour toute commande supérieure à <strong>1000 MAD</strong>.</li>
          <li><strong>Retours :</strong> Acceptés dans un délai de 7 jours si le produit est non utilisé, dans son emballage d'origine.</li>
        </ul>
      </div>
    </>
  );
};

export default Basket;
