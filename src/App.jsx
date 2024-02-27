import { Card } from "./component/card/card";
import { StoreProduct } from "./component/store-product/store-product";
import data from "./data/data";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const { totalCount } = useSelector((state) => state.product);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <StoreProduct isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex justify-between p-5">
        <h2 className="text-3xl text-blue-800">Logo</h2>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="bg-white p-3 rounded-xl relative"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="inline-flex absolute top-[-8px] right-[-8p8] items-center rounded-md bg-yellow-300 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {totalCount}
          </span>
        </button>
      </div>
      <h1 className="text-5xl text-center">Products</h1>
      <div className="flex gap-5 mt-[40px]">
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
