import React, { useState, useEffect } from "react";
import InputInterface from "./InputInterface";
import Todo from "./Todo";

function Body() {
  const [enter, setEnter] = useState(false);

  const [myData, setMyData] = useState("");
  // const [check, setCheck] = useState(true);

  const getLocalItems = () => {
    const dataList = localStorage.getItem("items");
    if (dataList) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  };
  const [items, setItems] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

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

      <Todo
        items={items}
        setItems={setItems}
        // check={check}
        // setCheck={setCheck}
      />

      <h1 className=" font-semibold text-xl md:text-2xl">Things done</h1>
    </div>
  );
}

export default Body;
