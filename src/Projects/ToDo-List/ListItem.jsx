import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import CustomTooltip from "../../App/components/Tooltip";
import toast from "react-hot-toast";

const ListItem = (props) => {
  const { todoList, setTodoList, setAddTask } = props;

  // Function to edit task
  const handleEdit = (taskList) => {
    setAddTask(taskList);
  };

  // Function to delete task
  const handleDelete = (taskId) => {
    let filterdTodoList = todoList.filter((ele) => ele.id !== taskId);

    setTodoList(filterdTodoList);
  };

  // Function to handle completed task
  const handleComplete = (taskId, taskValue, taskCompleted) => {
    let completedTodoList = todoList.map((ele) =>
      ele.id === taskId ? { ...ele, isCompleted: !ele?.isCompleted } : ele
    );

    setTodoList(completedTodoList);

    toast.success(
      taskCompleted
        ? `${taskValue} - Task not completed`
        : `${taskValue} - Task completed`
    );
  };

  return (
    <>
      <div className="w-full space-y-4 ">
        {todoList.map((task, index) => {
          return (
            <div
              key={index.toString() + 1}
              className="flex flex-row justify-between items-start gap-x-3"
            >
              <div
                className="flex flex-row justify-start items-start gap-x-4 cursor-pointer"
                onClick={() =>
                  handleComplete(task?.id, task?.todoValue, task?.isCompleted)
                }
              >
                <span className="h-5 w-5">
                  {task?.isCompleted ? (
                    <FaCheckCircle color="#16a34a" size={22} />
                  ) : (
                    <FaRegCircle color="#adadad" size={22} />
                  )}
                </span>

                <span
                  className={`break-all ${
                    task?.isCompleted ? "line-through" : "no-underline"
                  }`}
                >
                  {task?.todoValue}
                </span>
              </div>

              <div className="flex flex-row gap-3">
                <CustomTooltip text="Edit">
                  <div
                    className="h-5 w-5 cursor-pointer text-blue-900 hover:text-blue-950"
                    onClick={() => handleEdit(task)}
                  >
                    <TbEdit size={20} />
                  </div>
                </CustomTooltip>
                <CustomTooltip text="Delete">
                  <div
                    className="h-5 w-5 cursor-pointer text-gray-500 hover:text-red-600"
                    onClick={() => handleDelete(task?.id)}
                  >
                    <RiDeleteBin6Line size={20} />
                  </div>
                </CustomTooltip>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListItem;
