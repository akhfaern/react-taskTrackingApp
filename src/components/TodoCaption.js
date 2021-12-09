const TodoCaption = ({ caption }) => {
  return (
    <li className="mt-1">
      <div className="p-5 rounded-md bg-white shadow">
        <div className="text-yellow-800">{caption}</div>
      </div>
    </li>
  );
};

export default TodoCaption;
