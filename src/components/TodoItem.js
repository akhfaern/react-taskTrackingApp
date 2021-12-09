const TodoItem = ({ todo }) => {
  return (
    <li className="mt-1">
      <div className="p-5 rounded-md bg-white shadow">
        <div>{"#" + todo.id}</div>
        <div>{todo.title}</div>
        <div></div>
      </div>
    </li>
  );
};

export default TodoItem;
