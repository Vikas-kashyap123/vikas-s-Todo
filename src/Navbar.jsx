import React from "react";
import { AiFillBug } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-indigo-500 font-bold text-2xl">
        TODO USERS
      </h1>
      <div className="flex justify-between pt-4 border-b text-white pb-3">
        <div>
          <h1 className="text-white text-xl font-bold">
            <span className="text-red-500">Vikas's</span> ToDo
          </h1>
        </div>
        <div className="hover:text-green-500 text-2xl">
          <AiFillBug />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
