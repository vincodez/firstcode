import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart and total price from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    // Calculate total dynamically from storedCart
    const total = storedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, []);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h1>Total price: ₹{totalPrice}</h1>

      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <p>To add items to your cart, please visit the product page.</p>
        </>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100px', height: '100px' }}
              />
              <p>Model: {item.model}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
