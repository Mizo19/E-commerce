import React from 'react'
import './CategoryMenu.css';
const CategoryMenu = ({ categories, onCategoryClick }) => {
  return (
    <div className="dropdown-container">
      {categories.map((category) => (
        <div className="dropdown-item" key={category.id}>
          <div className="dropdown-title">🛒{category.title}</div>
          
          {/* Submenu */}
          {category.subcategories && (
            <div className="dropdown-submenu">
              {category.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className="submenu-item"
                  onClick={() => onCategoryClick(sub.id)}
                >
                  {sub.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu