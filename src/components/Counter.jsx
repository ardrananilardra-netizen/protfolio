import React, { useState,useEffect } from "react";

function Counter() {
  const [Count, SetCount] = useState(0);
  useEffect(()=>{
    console.log("Counter");},[]
  );

  function Increment() {
    if (Count < 20) {
      SetCount(Count + 1*5);
    }
  }

  function Decrement() {
 
      SetCount(Count - 1*5);

  }

  function Reset() {
    SetCount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">{Count}</h1>

        <div className="flex flex-col gap-3">
          <button
            onClick={Increment}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Increment
          </button>

          <button
            onClick={Decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Decrement
          </button>

          <button
            onClick={Reset}
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded-lg transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;