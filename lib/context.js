import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartitems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQty((prev) => (prev - 1 < 1 ? prev : prev - 1));
  };

  const onAdd = (product, quantity) => {
    setTotalPrice((prev) => prev + product.price * quantity);
    const { slug } = product;
    setTotalQuantities((prev) => prev + quantity);
    const exist = cartItems.find((item) => item.slug === slug);
    if (exist) {
      setCartitems(
        cartItems.map((item) =>
          item.slug === slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartitems((prev) => [...prev, { ...product, quantity }]);
    }
  };

  const onRemove = (product) => {
    setTotalPrice((prev) => prev - product.price);
    const { slug } = product;
    const exist = cartItems.find((item) => item.slug === slug);
    setTotalQuantities((prev) => prev - 1);
    if (exist) {
      if (product.quantity === 1) {
        setCartitems(cartItems.filter((item) => item.slug !== slug));
      } else {
        setCartitems(
          cartItems.map((item) =>
            item.slug === slug ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        onAdd,
        onRemove,
        cartItems,
        showCart,
        setShowCart,
        totalQuantities,
        totalPrice,
        setQty
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
