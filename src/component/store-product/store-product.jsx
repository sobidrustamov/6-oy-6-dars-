import React from "react";
import { Modal } from "../modal/modal";
import { useSelector } from "react-redux";
import { StoreCard } from "../store-card/store-card";

export const StoreProduct = ({ isOpen, setIsOpen }) => {
  const { products, totalPrice } = useSelector((state) => state.product);
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {products.map((item) => (
          <StoreCard key={item.id} {...item} />
        ))}
        <strong className="text-center block">
          Total Price: {totalPrice} $
        </strong>
      </Modal>
    </div>
  );
};
