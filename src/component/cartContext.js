import React, { createContext, useReducer } from "react";

// Create the context
export const CartContext = createContext();

// Initial state
const initialState = {
  cartItems: [],
};

// Reducer to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const existingIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        const updatedItems = [...state.cartItems];
        updatedItems[existingIndex].quantity += 1;
        return { ...state, cartItems: updatedItems };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case "INCREMENT": {
      const updatedItems = state.cartItems.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { ...state, cartItems: updatedItems };
    }

    case "DECREMENT": {
      const updatedItems = state.cartItems
        .map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0);
      return { ...state, cartItems: updatedItems };
    }

    case "REMOVE": {
      const filteredItems = state.cartItems.filter(item => item.id !== action.payload);
      return { ...state, cartItems: filteredItems };
    }

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

// Provider component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action dispatchers
  const addProduct = product => dispatch({ type: "ADD_PRODUCT", payload: product });
  const increaseQty = id => dispatch({ type: "INCREMENT", payload: id });
  const decreaseQty = id => dispatch({ type: "DECREMENT", payload: id });
  const remove = id => dispatch({ type: "REMOVE", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addProduct,
        increaseQty,
        decreaseQty,
        remove,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
