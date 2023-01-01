import React from "react";
import {
  RemoveFromPanier,
  incrementQuantite,
  decrementQuantite,
} from "./store/reducer";
import { useDispatch, useSelector } from "react-redux";
import Quite from "./SVG/Quite";

export default function Product({ idP, panier }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products.find((item) => item.idP === idP);
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.src} alt="" />
      </div>
      <div className="product-info">
        <div className="product-te">
          <div className="bolder">
            <p>{product.ProductName}</p>
          </div>
          <div className="bolder">
            <p>Size:</p>
            {product.size}
          </div>
        </div>
        <div className="product-quntity">
          <div className="product-flex">
            <button
              className="qunti"
              onClick={() => {
                dispatch(incrementQuantite({ idP: idP }));
              }}
            >
              +
            </button>
            <p>{panier.find((item) => item.idP === idP).quantite}</p>
            <button
              className="qunti"
              onClick={() => {
                dispatch(decrementQuantite({ idP: idP }));
              }}
            >
              -
            </button>
          </div>
          <p className="prix">{product.price}$</p>
        </div>
        <div
          className="quite"
          onClick={() => {
            dispatch(RemoveFromPanier({ idP: idP }));
          }}
        >
          <Quite />
        </div>
      </div>
    </div>
  );
}
