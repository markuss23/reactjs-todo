import { useState } from "react";
import TodoControl from "./components/TodoControl";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const handleCompleteTodo = (idx) => {
    const updatedTodoList = todoList.map((todo, index) => {
      if (index === idx) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoControl handleAddTodo={handleAddTodo} />
      <hr />
      {todoList.length === 0 ? (
        <p className="alert alert-info">No todos</p>
      ) : (
        <ul className="list-group">
          {todoList.map((todo, idx) => (
            <li key={idx} className="list-group-item">
              {todo.title}
              {todo.completed ? (
                <div className="btn-sm float-end">Completed</div>
              ) : (
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => handleCompleteTodo(idx)}
                >
                  Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoMain;
