// cartReducer.js
export const CartReducer = (state, action) => {

  switch (action.type) {
    case "ADD":
    case "INCREASE": {
      const index = state.cartItems.findIndex(x => x.id === action.payload.id);

      if (index === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1   }]   
            };
    
      } else {
        const updatedCart = [...state.cartItems];
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + 1
        };
        return {
          ...state,
          cartItems: updatedCart
        };
      }
    }

    case "DECREASE": {
      const index = state.cartItems.findIndex(x => x.id === action.payload.id);
      if (index !== -1 && state.cartItems[index].quantity > 1) {
        const updatedCart = [...state.cartItems];
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1
        };
        return {
          ...state,
          cartItems: updatedCart
        };
      } else {
        // If quantity is 1 or less, remove the item
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
        };
      }
    }

    case "REMOVE": {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    }

    case "CLEAR": {
      return {
        ...state,
        cartItems: []
      };
    }

    default:
      return state;
  }
};
