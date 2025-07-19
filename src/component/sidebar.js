import React, { useState } from "react";
import { Home, ShoppingCart, Info } from "lucide-react";
import './sidebar.css';

const Sidebar = ({ isOpen, toggle, categories, onCategoryClick }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategoryId(prev => prev === id ? null : id);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggle}>×</button>

      <ul className="sidebar-links">
        {/* Home */}
        <li className="nav-item">
          <Home size={18} />
          <span className="nav-text">Home</span>
        </li>

        {/* Produits */}
        <li className="nav-item" onClick={() => setShowCategories(!showCategories)}>
          <ShoppingCart size={18} />
          <span className="nav-text">Produits</span>
        </li>

        {/* Categories */}
        {showCategories && categories.map((cat) => (
          <React.Fragment key={cat.id}>
            <li
              className="nav-item category"
              onClick={() => toggleCategory(cat.id)}
            >
              <span className="nav-text">{cat.title}</span>
            </li>

            {/* Subcategories */}
            {expandedCategoryId === cat.id && cat.subcategories?.map((sub) => (
              <li
                key={sub.id}
                className="nav-item subcategory"
                onClick={() => onCategoryClick(sub.id)}
              >
                <span className="nav-text">{sub.title}</span>
              </li>
            ))}
          </React.Fragment>
        ))}

        {/* About */}
        <li className="nav-item">
          <Info size={18} />
          <span className="nav-text">À propos</span>
        </li>
        {/* About */}
        <li className="nav-item">
          <Info size={18} />
          <span className="nav-text">Promos</span>
        </li>
        {/* About */}
        <li className="nav-item">
          <Info size={18} />
          <span className="nav-text">Marque</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
