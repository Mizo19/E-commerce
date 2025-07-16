// src/component/Sidebar.js
import React, { useState } from "react";
import { Home, ShoppingCart, Info } from "lucide-react";
import './sidebar.css';

const Sidebar = ({ isOpen, toggle, categories, onCategoryClick }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategoryId(expandedCategoryId === id ? null : id);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggle}>×</button>

      <ul className="sidebar-links">
        <li><Home size={18} /> Home</li>

        <li
          onClick={() => setShowCategories(!showCategories)}
          style={{ cursor: "pointer" }}
        >
          <ShoppingCart size={18} />
          <span style={{ marginLeft: "8px" }}>Produits</span>
        </li>

        {showCategories && (
          <ul className="category-list">
            {categories.map((cat) => (
              <li key={cat.id} style={{ marginTop: '4px' }}>
                <div
                  onClick={() => toggleCategory(cat.id)}
                  style={{ cursor: 'pointer', fontWeight: 'bold' }}
                >
                  {cat.title}
                </div>

                {expandedCategoryId === cat.id && cat.subcategories && (
                  <ul className="subcategory-list" style={{ paddingLeft: '15px' }}>
                    {cat.subcategories.map((sub) => (
                      <li
                        key={sub.id}
                        onClick={() => onCategoryClick(sub.id)}
                        style={{ cursor: 'pointer', marginTop: '4px', fontSize: '14px' }}
                      >
                        - {sub.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}

        <li><Info size={18} /> À propos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
