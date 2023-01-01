import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { valideShop } from "./store/reducer";
import Successful from "./Successful";

export default function PopUp({ total, ShowPopup, Show, countPanier }) {
  const dispatch = useDispatch();
  const [succes, setSucces] = useState(false);
  const [isValide, setIsvalide] = useState(true);
  const Valider = () => {
    countPanier > 0 ? dispatch(valideShop()) : setIsvalide(false);
    ShowPopup(false);
    setSucces(true);
  };
  return (
    <>
      {Show && (
        <div className="overlay">
          <div className="popup order">
            <h1>ORDER SUMMARY</h1>
            <div
              className="close"
              onClick={() => {
                ShowPopup(false);
              }}
            >
              &times;
            </div>
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
            <button className="order-btn" onClick={Valider}>
              Valider
            </button>
          </div>
        </div>
      )}
      {succes && <Successful setSucces={setSucces} isValide={isValide} />}
    </>
  );
}
