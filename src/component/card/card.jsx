import React from "react";
import { addProduct } from "../../redux/reducers/product-reducer";
import { useDispatch, useSelector } from "react-redux";

export const Card = (product) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const ids = products.map((item) => item.id);
  const clicked = ids.includes(product.id);
  const addPro = () => {
    dispatch(addProduct(product));
  };
  return (
    <div className="w-[300px] border rounded-xl overflow-hidden bg-white">
      <div className="w-[250px] h-[250px]">
        <img src={product.img} alt="img" />
      </div>
      <h1 className="text-4xl text-blue-600 p-2">{product.name}</h1>
      <strong className="px-2">{product.price} $</strong>
      {clicked ? (
        <button
          onClick={addPro}
          className="w-full text-4xl py-2 mt-2 text-center bg-red-400"
        >
          <i className="fa-solid fa-trash "></i>
        </button>
      ) : (
        <button
          onClick={addPro}
          className="w-full text-4xl py-2 mt-2 text-center bg-cyan-300"
        >
          +
        </button>
      )}
    </div>
  );
};
