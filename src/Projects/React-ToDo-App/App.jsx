import { useState } from "react";
import { RiCalendarTodoLine } from "react-icons/ri";
import ListItem from "./ListItem";

const ReactToDoApp = () => {
  const [addTask, setAddTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Function to handle the input onChange
  const handleChange = (event) => {
    setAddTask(event.target.value);
  };

  // Function to handle the task list
  const handleAddTask = () => {
    setTodoList((prev) => [...prev, { id: prev.length + 1, item: addTask }]);
    setAddTask("");
  };

  // Function to handle the keypress
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-152 min-h-96 flex flex-col justify-start items-start p-6 space-y-6 rounded-xl overflow-hidden border border-gray-200 shadow bg-amber-100">
          <div className="flex gap-3 justify-center items-center text-3xl font-medium">
            <RiCalendarTodoLine />
            <h1>To-Do List</h1>
          </div>

          <div className="w-full mx-auto relative">
            <input
              id="todoSearch"
              type="text"
              className="block w-full p-4 ps-4 pe-24 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={addTask}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyPress(event)}
              placeholder="Add your task..."
              required
            />
            <button
              type="button"
              className={`text-white absolute end-2.5 bottom-2.5  focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 ${
                addTask
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-slate-400 cursor-not-allowed"
              }`}
              onClick={() => handleAddTask()}
              disabled={!addTask}
            >
              ADD +
            </button>
          </div>

          {/* List Item Component */}
          {todoList.length > 0 && <ListItem todoList={todoList} />}
        </div>
      </div>
    </>
  );
};

export default ReactToDoApp;
