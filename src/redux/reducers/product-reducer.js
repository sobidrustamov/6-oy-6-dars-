import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
  totalCount: 0,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const idintify = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (!idintify) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }

      return state;
    },
    remove: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    toggleAnmount: (state, action) => {
      if (action.payload.type === "add") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProduct };
      }
      if (action.payload.type === "remove") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProduct };
      }
    },
    totalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => {
          return a + b.userPrice;
        }, 0),
      };
    },
    totalCount: (state) => {
      return {
        ...state,
        totalCount: state.products.reduce((a, b) => {
          return a + b.userCount;
        }, 0),
      };
    },
  },
});

export const productReducer = product.reducer;
export const { addProduct, remove, toggleAnmount, totalCount, totalPrice } =
  product.actions;
