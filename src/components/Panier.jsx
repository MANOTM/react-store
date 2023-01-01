import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PopUp from "./PopUp";
import Product from "./Product";

export default function Panier() {
  const panier = useSelector((state) => state.panier);
  const total = panier.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantite * currentValue.price,
    0
  );
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bag">
      <p className="title">YOUR BAG</p>
      <p className="bag-count">Shopping Bag ({panier.length})</p>
      <div className="bag-countainer">
        <div className="products">
          {panier.map((product, index) => {
            return <Product idP={product.idP} panier={panier} key={index} />;
          })}
        </div>
        <div className="order">
          <h1>ORDER SUMMARY</h1>
          <div className="order-flex">
            <p>Subtotal</p>
            <p>{total}$</p>
          </div>
          <div className="order-flex">
            <p>Tax</p>
            <p>00.0$</p>
          </div>
          <div className="order-flex">
            <p>Shopping discount</p>
            <p>-00.0$</p>
          </div>
          <div className="order-flex">
            <p className="bold">Total</p>
            <p className="bold">{total}$</p>
          </div>
          <button
            className="order-btn"
            onClick={() => {
              setShowPopup(true);
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
      {
        <PopUp
          total={total}
          ShowPopup={setShowPopup}
          Show={showPopup}
          countPanier={panier.length}
        />
      }
    </div>
  );
}
