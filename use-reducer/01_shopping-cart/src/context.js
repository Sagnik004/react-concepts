import React, { useContext, useReducer, useEffect } from 'react';

import reducer from './reducer';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  loading: false,
  cart: [],
  total: 0.0,
  amount: 0,
};

const AppContext = React.createContext();

const AppProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'UPDATE_CART_TOTALS' });
  }, [state.cart]);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };
  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const handleRemoveItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const handleIncreaseCartItem = (id) => {
    dispatch({ type: 'INCREASE_CART_ITEM', payload: id });
  };
  const handleDecreaseCartItem = (id) => {
    dispatch({ type: 'DECREASE_CART_ITEM', payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleClearCart,
        handleRemoveItemFromCart,
        handleIncreaseCartItem,
        handleDecreaseCartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

// https://www.youtube.com/watch?v=ly3m6mv5qvg&list=PLnHJACx3NwAe5XQDk9xLgym7FF8Q4FYW7&index=7&t=26843s
