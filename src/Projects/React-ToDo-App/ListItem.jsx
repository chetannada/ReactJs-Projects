const ListItem = (props) => {
  const { todoList } = props;

  return (
    <>
      <div className="space-y-2 break-all">
        {todoList.map((list, index) => {
          return (
            <div key={index.toString() + 1} className="flex flex-row gap-x-2">
              <span>{list?.id}</span>
              <span>{list?.item}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListItem;
