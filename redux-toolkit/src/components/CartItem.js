import React from 'react';
import { useDispatch } from 'react-redux';

import { ChevronDown, ChevronUp } from '../icons';
import {
  removeItem,
  increaseQty,
  decreaseQty,
} from '../features/cart/cartSlice';

const CartItem = (props) => {
  const { id, title, price, img, amount } = props;
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn up-icon"
          onClick={() => {
            dispatch(increaseQty({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn down-icon"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseQty({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
