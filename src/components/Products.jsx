import React, { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Search from "./SVG/search";
export default function Products() {
  const Allproducts = useSelector((state) =>
    state.products.filter((item) => item.type === "old")
  );
  const [products, setProducts] = useState(Allproducts);
  const input = useRef();

  const SearchFilter = (e) => {
    const value = input.current.value;
    const newProducts = Allproducts.filter((item) =>
      item.ProductName.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(newProducts);
  };
  const changeGenre = (e) => {
    const value = e.target.value;
    if (value) {
      setProducts(Allproducts.filter((item) => item.genre === value));
    } else {
      setProducts(Allproducts);
    }
  };
  return (
    <section id="new" className="new container">
      <div className="title">
        <p>Best Products</p>
        <div className="search">
          <input
            type="text"
            ref={input}
            placeholder="Search for Produits ..."
            onChange={(e) => SearchFilter(e)}
          />
          <span>{<Search />}</span>
        </div>
        <select
          name=""
          onChange={(e) => {
            changeGenre(e);
          }}
        >
          <option value="">all</option>
          <option value="men">Men</option>
          <option value="woman">Woman</option>
        </select>
      </div>
      <div className="row">
        {products.map((product, index) => {
          return <Card product={product} key={index} />;
        })}
      </div>
    </section>
  );
}
