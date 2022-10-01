import React, { useState } from "react";
import InputInterface from "./InputInterface";
import Todo from "./Todo";

function Body() {
  const [enter, setEnter] = useState(false);

  function handleAddTodo() {
    setEnter(true);
    setEnter(!enter);
  }

  return (
    <div className="text-white">
      <div>
        <h1 className="text-white text-xl py-8 font-bold md:text-3xl ">
          Things to get done!
        </h1>
        <h1 className=" font-semibold text-xl md:text-2xl">Things to do</h1>

        <button
          onClick={handleAddTodo}
          className="bg-yellow-500 hover:bg-green-400 font-bold 
        rounded-full px-4 py-2"
        >
          Add a Todo
        </button>
        {enter && <InputInterface enter={enter} setEnter={setEnter} />}
      </div>
      <h1 className="text-xl font-bold md:text-2xl">Things done</h1>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default Body;
