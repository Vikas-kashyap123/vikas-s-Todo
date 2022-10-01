import React from "react";

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
        <div className="flex flex-col md:flex-row md:gap-4">
          <h1 className="text-white text-md font-bold md:text-xl">
            Incompleted : <span className="text-red-500 font-bold">0</span>
          </h1>
          <h1 className="text-white text-md font-bold md:text-xl">
            Completed : <span className="text-green-500 font-bold">0</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
