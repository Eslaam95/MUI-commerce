/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useSnackbar } from "notistack";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();

  // const handleClick = () => {
  //   enqueueSnackbar("I love snacks.");
  // };

  // const handleClickVariant = (v) => () => {
  //   // variant could be success, error, warning, info, or default
  //   enqueueSnackbar("This is a success message!", { variant: v });
  // };

  const [cartItems, setCartItems] = useState([]);
  function getItemQuantity(id) {
    return cartItems.find((item) => item?.id === id)?.quantity || 0;
  }
  function removeItem(id) {
    setCartItems((curritems) => curritems.filter((item) => item.id !== id));
    enqueueSnackbar("Removed from cart!", {
      variant: "error",
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
      autoHideDuration: 3000,
    });
  }

  function addItem(el) {
    setCartItems((curritems) => {
      if (curritems.find((item) => item?.id === el.id) == null) {
        console.log("added new item", cartItems);
        return [...cartItems, { ...el, quantity: 1 }];
      } else {
        return curritems.map((item) => {
          if (item?.id === el.id) {
            console.log("added new item", cartItems);
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });

    enqueueSnackbar("Added to cart!", {
      variant: "success",
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
      autoHideDuration: 3000,
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
    enqueueSnackbar("Removed from cart!", {
      variant: "error",
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
      autoHideDuration: 3000,
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
