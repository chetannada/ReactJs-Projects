import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from "../features/counterSlice";
import { useState } from "react";

export const Counter = () => {
  const [inputValue, setInputValue] = useState(null);
  const dispatch = useDispatch();
  const countValue = useSelector((item) => item?.show?.value);

  const handleInputValue = (event) => {
    setInputValue(Number(event.target.value));
  };

  return (
    <>
      <div className="py-10 p-2 space-y-6 w-152 rounded-xl overflow-hidden shadow-lg bg-orange-200">
        <h1 className="text-center text-4xl">React Redux Counter App</h1>
        <div className="px-4 space-y-4 flex flex-col justify-center items-center">
          <div className="w-140 xsm:w-72 break-words">
            <h2 className="mb-2 text-center text-3xl">
              Current Value:{" "}
              <span className="text-green-700">{countValue}</span>
            </h2>
          </div>

          <div className="pb-4
           flex flex-row flex-wrap justify-center items-center gap-6">
            <button
              className=" bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="bg-red-700 hover:bg-red-800 text-white font-bold
              py-2 px-4 rounded-md"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>

          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type any Number"
            type="number"
            value={inputValue}
            onChange={handleInputValue}
            onKeyDown={(event) =>
              ["e", "E", "+", "-"].includes(event.key) && event.preventDefault()
            }
          />

          <button
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => dispatch(incrementByValue(inputValue))}
          >
            Increment by Value
          </button>
          <button
            className="bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => dispatch(decrementByValue(inputValue))}
          >
            Decrement by Value
          </button>
        </div>
      </div>
    </>
  );
};
