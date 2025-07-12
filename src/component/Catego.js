import React, { useState } from 'react';
import './CategoryMenu.css'

const Category = ({ id, title, subcategories = [], onCategoryClick }) => {
  const [showSub, setShowSub] = useState(false);

  return (
    <div
      className="category-container"
      onMouseEnter={() => setShowSub(true)}
      onMouseLeave={() => setShowSub(false)}
      style={{ position: 'relative', display: 'inline-block', margin: '0 10px', cursor: 'pointer' }}
    >
      <span className="category-text">🌿 {title}</span>

      {showSub && subcategories.length > 0 && (
        <div
          className="subcategory-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: '5px 10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            zIndex: 1000,
            minWidth: '150px',
          }}
        >
          {subcategories.map((sub) => (
            <div
              key={sub.id}
              onClick={() => onCategoryClick(sub.id)}
              style={{ padding: '5px 0', cursor: 'pointer' }}
            >
              {sub.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
