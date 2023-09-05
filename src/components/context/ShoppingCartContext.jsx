/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function getItemQuantity(id) {
    return cartItems.find((item) => item?.id === id)?.quantity || 0;
  }
  function removeItem(id) {
    setCartItems((curritems) => curritems.filter((item) => item.id !== id));
  }

  function addItem(id) {
    setCartItems((curritems) => {
      if (curritems.find((item) => item?.id === id) == null) {
        console.log("added new item", cartItems);
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return curritems.map((item) => {
          if (item?.id === id) {
            console.log("added new item", cartItems);
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  const allItemsCount = cartItems.length
    ? cartItems.reduce((sum, el) => {
        sum += el.quantity;
        return sum;
      }, 0)
    : 0;

  function decreasreItemCount(id) {
    setCartItems((curritems) => {
      if (curritems.find((item) => item.id === id) == null) {
        return curritems;
      } else {
        return curritems.map((item) => {
          if (item.id === id) {
            // if (item.quantity === 1) {
            //   setCartItems((curritems) =>
            //     curritems.filter((item) => item.id !== id)
            //   );
            // } else {
            return { ...item, quantity: item.quantity - 1 };
            // }
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        getItemQuantity,
        decreasreItemCount,
        allItemsCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
