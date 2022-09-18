const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'DISPLAY_ITEMS':
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    case 'REMOVE_ITEM':
      const updatedCartItems = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCartItems,
      };

    case 'INCREASE_CART_ITEM':
      const increasedTempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          };
        }
        return cartItem;
      });

      return {
        ...state,
        cart: increasedTempCart,
      };

    case 'DECREASE_CART_ITEM':
      const decreasedTempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);

      return {
        ...state,
        cart: decreasedTempCart,
      };

    case 'UPDATE_CART_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;

          cartTotal.amount += amount;
          cartTotal.total += price * amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        total,
        amount,
      };

    default:
      throw new Error(`Unhandled action of type ${action.type}!`);
  }
};

export default reducer;
