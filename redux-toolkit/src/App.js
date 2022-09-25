import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from './components/Modal';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen: isModalOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
