import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoToBasketButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/basket');
  };

  return (
    <button onClick={handleClick}>
      Go to Basket
    </button>
  );
};

export default GoToBasketButton;
