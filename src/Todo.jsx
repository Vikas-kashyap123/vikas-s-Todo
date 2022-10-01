import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function Todo() {
  return (
    <div>
      <div className="text-blue-500 text-md font-bold flex flex-row gap-2">
        <h1>this is my Name</h1>
        <h2 className="text-red-500 hover:text-red-800 text-2xl">
          <AiOutlineDelete />
        </h2>
      </div>
    </div>
  );
}

export default Todo;
