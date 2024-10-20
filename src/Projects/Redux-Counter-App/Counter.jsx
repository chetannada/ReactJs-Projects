import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
  decrementByValue,
} from "./counterSlice";

const Counter = () => {
  const [inputValue, setInputValue] = useState(null);
  const dispatch = useDispatch();
  const countValue = useSelector((item) => item?.counter?.value);

  const handleInputValue = (event) => {
    setInputValue(Number(event.target.value));
  };

  return (
    <>
      <div className="py-10 p-2 space-y-6 w-164 rounded-xl overflow-hidden border border-gray-200 shadow bg-orange-200">
        <h1 className="text-center text-4xl ">React Redux Counter App</h1>
        <div className="px-4 space-y-4 flex flex-col justify-center items-center">
          <div className="flex flex-col flex-wrap items-center justify-center text-center">
            <h2 className="flex flex-row justify-center flex-wrap gap-2 text-3xl">
              Current Value:
              <span className="text-green-700">{countValue}</span>
            </h2>
          </div>

          <div
            className="pb-4
           flex flex-row flex-wrap justify-center items-center gap-6 "
          >
            <button
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md"
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
            <button
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold
              py-2 px-4 rounded-md"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>

          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 mob:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type any Value"
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

export default Counter;
