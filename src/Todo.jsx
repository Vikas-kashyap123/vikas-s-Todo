import React from "react";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

function Todo({ items, setItems, check, setCheck, editedData }) {
  const handleRemoveItem = (id) => {
    console.log("remove Button clicked", id);
    const updatedData = items.filter((elements, index) => {
      return index != id;
    });
    setItems(updatedData);
  };

  function handleCheckBox(event) {
    setCheck(event.target.check);
    setCheck(false);
  }

  function handleEditClick() {
    editedData();
  }

  return (
    <div className="max-w-md">
      {items.map((elements, index) => {
        return (
          <div
            key={index}
            className="border-2 border-yellow-400 max-w-20 rounded-md my-2"
          >
            <div
              className="text-green-500 text-md font-bold  flex flex-row gap-2 justify-between
                 sm:justify-start px-4"
            >
              <div className="flex gap-1 ">
                <div>
                  <input
                    className="w-full h-full"
                    type="checkbox"
                    onClick={() => handleCheckBox(index)}
                  />
                </div>
                <div>
                  <h1>{elements}</h1>
                </div>
              </div>
              <div className="flex">
                <h2 className="text-red-500 hover:text-red-800 text-2xl">
                  <AiOutlineDelete onClick={() => handleRemoveItem(index)} />
                </h2>
                <h1>
                  <AiFillEdit
                    onClick={handleEditClick}
                    className="text-green-500 w-full h-full"
                  />
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;

{
  /* <div>
  {items.map((elements, index) => {
    return (
      <div
        key={index}
        className="border-2 border-yellow-400 max-w-20 rounded-md my-2"
      >
        <div
          className="text-green-500 text-md font-bold  flex flex-row gap-2 justify-between
                 sm:justify-start px-4"
        >
          <div className="flex gap-1 ">
            <input className="w-full h-full" type="checkbox" />
            <h1>{elements}</h1>
          </div>
          <h2 className="text-red-500 hover:text-red-800 text-2xl">
            <AiOutlineDelete onClick={() => handleRemoveItem(index)} />
          </h2>
        </div>
      </div>
    );
  })}
</div>; */
}
