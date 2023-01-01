import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import New from "./components/New";
import Panier from "./components/Panier";
import Products from "./components/Products";
import store from "./components/store/Store";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/products" element={<Products />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </Provider>
    </Router>
  );
}