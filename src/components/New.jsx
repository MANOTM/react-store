import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function New() {
  const newProducts = useSelector((state) =>
    state.products.filter((item) => item.type === "new")
  );
  return (
    <section id="new" className="new container">
      <div className="title">
        <p>New Categories</p>
      </div>
      <div className="row">
        {newProducts.map((product, indx) => {
          return <Card product={product} key={indx} />;
        })}
      </div>
    </section>
  );
}
