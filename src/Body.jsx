import React, { useState } from "react";
import InputInterface from "./InputInterface";
import { AiOutlineDelete } from "react-icons/ai";

function Body() {
  const [enter, setEnter] = useState(false);
  const [items, setItems] = useState([]);
  const [myData, setMyData] = useState("");

  function handleAddTodo() {
    setEnter(true);
    setEnter(!enter);
  }

  const handleRemoveItem = (id) => {
    console.log("remove Button clicked", id);
    const updatedData = items.filter((elements, index) => {
      return index != id;
    });
    setItems(updatedData);
  };

  return (
    <div className="text-white">
      <div>
        <h1 className="text-white text-xl py-8 font-bold md:text-3xl ">
          Things to get done!
        </h1>
        <h1 className=" font-semibold text-xl md:text-2xl">Things to do</h1>

        <div>
          {items.map((elements, index) => {
            return (
              <div
                key={index}
                className="border-2 border-yellow-400 max-w-20 rounded-md my-2"
              >
                <div className="text-green-500 text-md font-bold  flex flex-row gap-2 justify-between sm:justify-start px-4">
                  <h1>{elements}</h1>
                  <h2 className="text-red-500 hover:text-red-800 text-2xl">
                    <AiOutlineDelete onClick={() => handleRemoveItem(index)} />
                  </h2>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleAddTodo}
          className="bg-yellow-500 hover:bg-green-400 font-bold 
        rounded-full px-4 py-2"
        >
          Add a Todo
        </button>
        {enter && (
          <InputInterface
            items={items}
            setItems={setItems}
            myData={myData}
            enter={enter}
            setEnter={setEnter}
            setMyData={setMyData}
          />
        )}
      </div>
      <h1 className="text-xl font-bold md:text-2xl">Things done</h1>
    </div>
  );
}

export default Body;
