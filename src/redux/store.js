import { saveState } from "../config/storage";
import {
  productReducer,
  addProduct,
  remove,
  toggleAnmount,
  totalPrice,
  totalCount,
} from "./reducers/product-reducer";
import {
  createListenerMiddleware,
  isAnyOf,
  configureStore,
} from "@reduxjs/toolkit";

const storageMiddlware = createListenerMiddleware();

storageMiddlware.startListening({
  matcher: isAnyOf(addProduct, remove, toggleAnmount),
  effect: (_action, api) => {
    api.dispatch(totalPrice());
    api.dispatch(totalCount());
  },
});
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(storageMiddlware.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});
