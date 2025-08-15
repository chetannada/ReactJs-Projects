import { useState, useEffect } from "react";
import { RiCalendarTodoLine } from "react-icons/ri";
import ListItem from "./ListItem";

const ToDoList = () => {
  // Initial state object for a task
  const initialValue = {
    id: null,
    todoValue: "",
    isCompleted: false,
  };

  const [addTask, setAddTask] = useState(initialValue);
  const [todoList, setTodoList] = useState(() => {
    const localData = localStorage.getItem("todoList");
    return localData ? JSON.parse(localData) : [];
  });

  // update localStorage when todoList changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  // Update input value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddTask({ ...addTask, [name]: value });
  };

  // Add a new task or update an existing one
  const handleAddTask = (event) => {
    event.preventDefault();
    // check the field is not just whitespace
    if (!addTask.todoValue.trim()) return;

    if (addTask.id) {
      // Update existing task using unique id
      const updatedList = todoList.map((task) =>
        task.id === addTask.id
          ? { ...addTask, todoValue: addTask.todoValue.trim() }
          : task
      );
      setTodoList(updatedList);
      setAddTask(initialValue);
    } else {
      // Create a new task with a unique id using Date.now()
      const newTask = {
        id: Date.now(),
        todoValue: addTask.todoValue.trim(),
        isCompleted: false,
      };
      setTodoList([...todoList, newTask]);
      setAddTask(initialValue);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-128 min-h-96 flex flex-col justify-start items-start px-8 py-6 space-y-6 rounded-xl overflow-hidden border border-gray-200 shadow bg-orange-200">
        <div className="flex gap-3 justify-center items-center text-3xl font-medium">
          <RiCalendarTodoLine />
          <h1>To-Do List</h1>
        </div>

        {/* Form submission handles both button click and Enter key */}
        <form onSubmit={handleAddTask} className="w-full mx-auto relative">
          <input
            id="todoValue"
            name="todoValue"
            type="text"
            required
            className="block w-full p-4 ps-4 pe-24 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            value={addTask.todoValue}
            onChange={handleChange}
            placeholder="Add your task..."
            autoComplete="off"
          />

          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 focus:outline-none font-semibold rounded-lg text-sm px-4 py-2 bg-green-600 hover:bg-green-700"
          >
            {addTask.id ? "UPDATE +" : "ADD +"}
          </button>
        </form>

        {/* Render tasks using ListItem component */}
        {todoList.length > 0 && (
          <ListItem
            todoList={todoList}
            setTodoList={setTodoList}
            setAddTask={setAddTask}
          />
        )}
      </div>
    </div>
  );
};

export default ToDoList;
