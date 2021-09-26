import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import "./Coder.css";

const Coder = (props) => {
  const { img, name, gender, email, phone, price } = props.coder;
  return (
    <div className="coder-container">
      {/* main card sention */}
      <div className="coder-card">
        <div className="coder-image">
          <img src={img} alt="" />
        </div>
        <h3>{name}</h3>
        <p>
          <small>Gender: {gender}</small>
        </p>
        <p>phone: {phone}</p>
        <p>
          <small>emails: {email}</small>
        </p>
        <h3>price: ${price}</h3>
        <div className="btn-regular">
          <button
            onClick={() => props.handleAddToCart(props.coder)}
            className=" card-btn"
          >
            <FontAwesomeIcon icon={faCodeBranch} /> add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coder;
