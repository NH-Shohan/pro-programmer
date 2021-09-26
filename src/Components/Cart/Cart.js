import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;

  for (const coder of cart) {
    if (!coder.quantity) {
      coder.quantity = 1;
    }
    total = total + coder.price * coder.quantity;
    totalQuantity = totalQuantity + coder.quantity;
  }

  return (
    //   cart container section
    <div className="cart-container">
      <h3>Programmer Added: {totalQuantity}</h3>
      <h2>Total Cost: ${total.toFixed(2)}</h2>
      <div className="cart">
        <ul>
          {cart.map((coder) => (
            <li key={coder.phone}>
              <img src={coder.img} alt="" />
              {coder.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="btn-regular">
        <button className=" card-btn">Done</button>
      </div>
    </div>
  );
};

export default Cart;
