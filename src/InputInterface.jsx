import React, { useState } from "react";

function InputInterface({ enter, setEnter }) {
  // [localInput, setLocalInput] = useState("");

  // function handleInputChange(event) {
  //   setLocalInput(event.target.value);
  // }
  function handleSaveClick() {
    setEnter(!enter);

    // setLocalInput(localInput);
  }

  // if (localInput) {
  //   return <div>{localInput}</div>;
  // }

  return (
    <div className="border border-white p-4 text-white rounded-md mt-4 space-y-4 font-bold">
      <h1>Create a todo</h1>
      <div>
        <input
          // value={localInput}
          // onChange={handleInputChange}
          placeholder="Write an article about XState"
          className="rounded-md p-2 border-2 text-black border-yellow-400 w-full "
        />
      </div>
      <div>
        <button
          onClick={handleSaveClick}
          className="bg-yellow-500 rounded-md hover:bg-green-500 py-2 px-4"
        >
          Save
        </button>
        <button
          onClick={() => setEnter(!enter)}
          className="bg-white text-black  hover:bg-red-400 rounded-md py-2 px-4 ml-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default InputInterface;