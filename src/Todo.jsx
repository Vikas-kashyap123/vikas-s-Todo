import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function Todo({ elements }) {
  return (
    <div>
      <div className="text-red-500 text-md font-bold flex flex-row gap-2">
        <h1>{elements}</h1>
        <h2 className="text-red-500 hover:text-red-800 text-2xl">
          <AiOutlineDelete />
        </h2>
      </div>
    </div>
  );
}

export default Todo;
