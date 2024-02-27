import React from "react";
import { useDispatch } from "react-redux";
import { toggleAnmount, remove } from "../../redux/reducers/product-reducer";

export const StoreCard = ({ id, name, img, count, userCount, userPrice }) => {
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(toggleAnmount({ type: "add", id }));
  };
  const removeProduct = () => {
    dispatch(toggleAnmount({ type: "remove", id }));
  };

  const deleteProduct = () => {
    dispatch(remove({ id }));
  };

  return (
    <div className="flex items-center relative gap-[40px] border my-2 p-2">
      <button
        onClick={deleteProduct}
        className="bg-red-500 p-2 rounded-sm absolute top-4 right-4"
      >
        <i className="fa-solid fa-trash "></i>
      </button>
      <div className="w-[100px]">
        <img src={img} alt="img" />
      </div>
      <div>
        <h2 className="text-lg">{name}</h2>
        <strong>{userPrice} $</strong>
        <div className="flex items-center mt-2 gap-3">
          {userCount === 1 ? (
            <button onClick={deleteProduct} className="bg-red-500 w-[40px]">
              <i className="fa-solid fa-trash "></i>
            </button>
          ) : (
            <button onClick={removeProduct} className="w-[40px] bg-[#0000002d]">
              -
            </button>
          )}
          <span>{userCount}</span>
          <button
            disabled={count === userCount}
            onClick={addProduct}
            className="w-[40px] bg-[#0000002d]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
