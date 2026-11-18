import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('delionmain_cart') || localStorage.getItem('ld33_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [orderReceipt, setOrderReceipt] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('delionmain_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (item, quantity = 1, options = {}) => {
    const cartItemId = `${item.id}-${JSON.stringify(options)}`;
    
    setCartItems(prev => {
      const existing = prev.find(i => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map(i => 
          i.cartItemId === cartItemId 
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity, options, cartItemId }];
    });

    showToast(`Added ${quantity}x "${item.name || item.title}" to your order!`);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(i => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev => 
      prev.map(i => i.cartItemId === cartItemId ? { ...i, quantity } : i)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce((acc, item) => {
    let itemPrice = item.price || 0;
    if (item.options?.bread?.includes('Gluten-Free')) {
      itemPrice += 1.50;
    }
    if (item.options?.extraBacon) {
      itemPrice += 2.00;
    }
    if (item.options?.extraCheese) {
      itemPrice += 1.25;
    }
    return acc + (itemPrice * item.quantity);
  }, 0);

  const tax = subtotal * 0.07; // 7% NC Sales Tax
  const total = subtotal + tax;

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      itemCount,
      subtotal,
      tax,
      total,
      toastMessage,
      showToast,
      orderReceipt,
      setOrderReceipt
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
