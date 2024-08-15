import { FaPlus } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

function CardFaq({ data, isOpen, handleOpen, index }) {
  return (
    <section
      onClick={() => handleOpen(index)}
      className="w-[60%] mx-auto bg-netflix-darkgray rounded-xl p-2 cursor-pointer"
    >
      <div className="flex justify-between items-center p-2">
        <h1>{data.question}</h1>
        {isOpen ? <CgClose /> : <FaPlus />}
      </div>
      {isOpen && (
        <div className="border-t border-netflix-lightgray mt-2 p-2">
          <p>{data.answer}</p>
        </div>
      )}
    </section>
  );
}

export default CardFaq;
