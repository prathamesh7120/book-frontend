import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price.replace("₹", ""));
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-card" key={index}>
                <img src={item.image} alt={item.title} className="cart-img" />

                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>

                  <p><strong>Author:</strong> {item.author}</p>
                  <p><strong>Published:</strong> {item.date}</p>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="total">Total: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;