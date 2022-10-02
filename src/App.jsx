import React, { useState } from "react";
import Navbar from "./Navbar";
import Body from "./Body";

function App() {
  const savedItemString = localStorage.getItem("my-items") || "[]";
  const savedItem = JSON.parse(savedItemString);
  console.log("savedItem is", savedItem);

  const [value, setValue] = useState(savedItem);

  const todoUpdate = (items) => {
    console.log("items", items);
    const oldItems = value[items] || "";
    const newItems = { ...value, [items]: oldItems + items };
    setValue(newItems);
    const itemsString = JSON.stringify(newItems);
    localStorage.setItem("my-items", itemsString);
  };

  return (
    <div className="bg-gray-800 h-screen pt-2 px-6 sm:px-14">
      <Navbar />
      <Body handleThingsChange={todoUpdate} />
    </div>
  );
}

export default App;
