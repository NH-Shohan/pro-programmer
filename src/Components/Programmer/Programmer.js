import React, { useEffect, useState } from "react";
import "./Programmer.css";
import Cart from "../Cart/Cart";
import Coder from "../Coder/Coder";

const Programmer = () => {
  const [Coders, setCoders] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./programmer.json")
      .then((res) => res.json())
      .then((data) => setCoders(data));
  }, []);

  const handleAddToCart = (coder) => {
    if (cart.includes(coder)) {
    } else {
      const newCart = [...cart, coder];
      setCart(newCart);
    }
  };

  return (
    // main section
    <main>
      <div className="programmer-container">
        {/* all card */}
        <div className="coder-container">
          {Coders.map((coder) => (
            <Coder
              key={coder.phone}
              coder={coder}
              handleAddToCart={handleAddToCart}
            ></Coder>
          ))}
        </div>

        {/* cart section */}
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </main>
  );
};

export default Programmer;
