import { useState } from "react";
import { RiCalendarTodoLine } from "react-icons/ri";
import ListItem from "./ListItem";

const ReactToDoApp = () => {
  // initial value for addTask
  const initialValue = {
    id: null,
    todoValue: "",
    isCompleted: false,
  };

  const [addTask, setAddTask] = useState(initialValue);
  const [todoList, setTodoList] = useState([]);

  // Function to handle the input onChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddTask({ ...addTask, [name]: value });
  };

  // Function to handle the task list
  const handleAddTask = (event) => {
    event.preventDefault();
    if (addTask?.id) {
      let updatedList = todoList.map((element) =>
        element.id === addTask?.id ? addTask : element
      );

      setTodoList(updatedList);
      setAddTask(initialValue);
    } else if (addTask?.todoValue) {
      setTodoList((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          todoValue: addTask?.todoValue,
          isCompleted: false,
        },
      ]);
      setAddTask(initialValue);
    }
  };

  // Function to handle the keypress
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask(event);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-128 min-h-96 flex flex-col justify-start items-start px-8 py-6 space-y-6 rounded-xl overflow-hidden border border-gray-200 shadow bg-orange-200">
          <div className="flex gap-3 justify-center items-center text-3xl font-medium">
            <RiCalendarTodoLine />
            <h1>To-Do List</h1>
          </div>

          <form className="w-full mx-auto relative">
            <input
              id="todoValue"
              name="todoValue"
              type="text"
              className="block w-full p-4 ps-4 pe-24 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={addTask?.todoValue}
              onChange={(event) => handleChange(event)}
              onKeyDown={(event) => handleKeyPress(event)}
              placeholder="Add your task..."
              autoComplete="off"
            />

            <button
              type="submit"
              className={`text-white absolute end-2.5 bottom-2.5 focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 bg-green-600 hover:bg-green-700 `}
              onClick={(event) => handleAddTask(event)}
            >
              {addTask?.id ? "UPDATE +" : "ADD +"}
            </button>
          </form>

          {/* List Item Component */}
          {todoList.length > 0 && (
            <ListItem
              todoList={todoList}
              setTodoList={setTodoList}
              setAddTask={setAddTask}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ReactToDoApp;
