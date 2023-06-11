import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from "../features/counterSlice";
import { useState } from "react";

export const Counter = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const value = useSelector((item) => item?.show?.value);
  return (
    <>
      <div className="py-14 p-2 space-y-6 w-152 max-w-xl rounded-xl overflow-hidden shadow-lg bg-orange-200">
        <h1 className="text-center text-4xl">React Redux Counter App</h1>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl">
            Current Value: <span className="text-green-700">{value}</span>
          </h2>
          <span className="space-x-4">
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
          </span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type any value"
            type="text"
            value={val}
            onChange={(e) => setVal(+e.target.value)}
          />
          <button
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => dispatch(incrementByValue(val))}
          >
            Increment by Value
          </button>
          <button
            className="bg-rose-700 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => dispatch(decrementByValue(val))}
          >
            Decrement by Value
          </button>
        </div>
      </div>
    </>
  );
};
