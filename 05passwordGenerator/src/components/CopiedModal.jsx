// CopiedModal.js
import React, { useEffect } from "react";

const CopiedModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      // Close the modal after 3000 milliseconds (3 seconds)
      timeoutId = setTimeout(() => {
        onClose();
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-100 pointer-events-auto"
      } fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ease-in-out border-2 border-red-700`}
    >
      <div className="bg-white shadow-lg rounded-lg fixed top-[20rem] left-[45%] bg-transparent">
        <p className="text-black"> Copied ✅ </p>
      </div>
    </div>
  );
};

export default CopiedModal;
