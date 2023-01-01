import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/Data.json";

function setItemToLocalStorag(array) {
  localStorage.setItem("panier", JSON.stringify(array));
}

function LoadPanier() {
  const PanierStorage = localStorage.getItem("panier");
  if (PanierStorage) {
    return JSON.parse(PanierStorage);
  } else {
    return [];
  }
}

const initialState = {
  products: [...data],
  panier: [...LoadPanier()],
};
const StoreSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToPanier: (state, action) => {
      const newPanier = [...state.panier, action.payload];
      setItemToLocalStorag(newPanier);
      state.panier=newPanier
    },
    RemoveFromPanier: (state, action) => {
      const newPanier = state.panier.filter(
        (item) => item.idP !== action.payload.idP
      );
      setItemToLocalStorag(newPanier);
      state.panier=newPanier
    },
    incrementQuantite: (state, action) => {
      const newPanier=state.panier.map((item) => {
        if (item.idP === action.payload.idP) item.quantite++;
        return item;
      })
      state.panier=newPanier
    },
    decrementQuantite: (state, action) => {
      const newPanier=state.panier.map((item) => {
        if (item.idP === action.payload.idP) {
          if (item.quantite !== 1) item.quantite--;
        }
        return item;
      })
      state.panier=newPanier
    },
    valideShop: (state) => {
      const newProduct = state.products.map((product) => {
        const search = state.panier.find((serc) => serc.idP === product.idP);
        return search
          ? { ...product, stock: product.stock - search.quantite }
          : { ...product };
      });
      localStorage.clear();
      state.panier=[]
      state.products=newProduct
    },
  },
});

export const {
  addToPanier,
  RemoveFromPanier,
  decrementQuantite,
  incrementQuantite,
  valideShop,
} = StoreSlice.actions;
export default StoreSlice.reducer;
