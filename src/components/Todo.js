import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { TodoService } from "../services/TodoService";
import TodoItem from "./TodoItem";
import TodoCaption from "./TodoCaption";
import Topbar from "./Topbar";

const Todo = () => {
  const params = useParams();
  const { users } = useContext(AppContext);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const getToDoList = async () => {
      const service = new TodoService();
      const userId = users.filter((user) => user.username === params.username);
      if (userId.length === 1) {
        const data = await service.getTodoByUser(userId[0].id);
        setTodoList(data);
      }
    };

    getToDoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className="flex flex-grow bg-gray-300 h-screen">
      <div className="grid grid-cols-1 min-w-full">
        <Topbar />
        <div className="flex flex-row px-3 pt-1 overflow-scroll">
          <ul className="pt-1 px-3 pb-3">
            <TodoCaption caption="Completed Tasks" />
            {todoList
              .filter((todo) => todo.completed === true)
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
          </ul>
          <ul className="pt-1 px-3 pb-3">
            <TodoCaption caption="Incomplete Tasks" />
            {todoList
              .filter((todo) => todo.completed === false)
              .map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
