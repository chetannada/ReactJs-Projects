import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomTooltip from "../../App/CustomComponents/Tooltip";

const ListItem = (props) => {
  const { todoList, setTodoList } = props;

  // Function to delete task
  const handleDelete = (listId) => {
    let filterdTodoList = todoList.filter((ele) => ele.id !== listId);

    setTodoList(filterdTodoList);
  };

  // Function to handle completed task
  const handleComplete = (listId) => {
    let completedTodoList = todoList.map((ele) =>
      ele.id === listId ? { ...ele, isCompleted: !ele?.isCompleted } : ele
    );

    setTodoList(completedTodoList);
  };

  return (
    <>
      <div className="w-full space-y-4 ">
        {todoList.map((list, index) => {
          return (
            <div
              key={index.toString() + 1}
              className="flex flex-row justify-between items-start gap-x-3"
            >
              <CustomTooltip
                text={`${
                  list?.isCompleted
                    ? `${list?.item} - Task completed!`
                    : `${list?.item} - Task not completed!`
                }`}
              >
                <div
                  className="flex flex-row justify-start items-start gap-x-4 cursor-pointer"
                  onClick={() => handleComplete(list?.id)}
                >
                  <span className="h-5 w-5">
                    {list?.isCompleted ? (
                      <FaCheckCircle color="#16a34a" size={22} />
                    ) : (
                      <FaRegCircle color="#adadad" size={22} />
                    )}
                  </span>

                  <span
                    className={`break-all ${
                      list?.isCompleted ? "line-through" : "no-underline"
                    }`}
                  >
                    {list?.item}
                  </span>
                </div>
              </CustomTooltip>

              <CustomTooltip text="Delete task!">
                <div
                  className="h-5 w-5 cursor-pointer text-gray-500 hover:text-red-600"
                  onClick={() => handleDelete(list?.id)}
                >
                  <RiDeleteBin6Line size={20} />
                </div>
              </CustomTooltip>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListItem;
