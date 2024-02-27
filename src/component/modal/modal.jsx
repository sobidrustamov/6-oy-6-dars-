import { Dialog } from "@headlessui/react";
import React from "react";

export const Modal = ({ children, isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-[#0000006d]  flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded bg-white p-5">
          <Dialog.Title className="text-center text-xl">
            Complete your order
          </Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
