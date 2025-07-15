import React from 'react';
import './Guarantees.css';
import Icon1 from './pictures/paiementcertifie.png';
import Icon2 from './pictures/livrasion.png';
import Icon3 from './pictures/produitcertifié.png';
import Icon4 from './pictures/confidentilite.png';

const data = [
  { icon: Icon1, title: 'Paiement sécurisé', text: 'Garantie et fiche produit' },
  { icon: Icon2, title: 'Livraison offerte', text: 'Voir nos conditions' },
  { icon: Icon3, title: 'Produits certifiés', text: 'Garantie et fiche produit' },
  { icon: Icon4, title: 'Confidentialité', text: 'de vos données personnelles' },
];

export default function Guarantees() {
  return (
    <div className="guarantees">
      {data.map((d, i) => (
        <div key={i} className="item">
          <img src={d.icon} alt="" />
          <h4>{d.title}</h4>
          <p>{d.text}</p>
          <span></span>
        </div>
      ))}
    </div>
  );
}