import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Redux() {
  // useSelector nhận vào tham số là một callback function, nó sẽ theo dõi và gọi lại callback function mỗi khi giá trị state của redux store bị thay đổi
  // callback có tham số là state của redux store
  // giá trị return bên trong callback sẽ được chuyển thành state của component
  const { count, todos } = useSelector((state) => {
    const count = state.countReducer.count;
    const todos = state.todoReducer.todos;

    return { count, todos };
  });

  // useDispatch return về dispatch function
  // Dùng dispatch function để gửi action lên redux store
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const title = prompt("Input your todo:");
    const todo = {
      id: Math.floor(Math.random() * 100),
      title,
      isCompleted: false,
    };

    dispatch({ type: "todo/add_todo", payload: todo });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({ type: "todo/delete_todo", payload: todoId });
  };

  const handleUpdateTodo = (todoId) => {
    dispatch({ type: "todo/update_todo", payload: todoId });
  };

  return (
    <div>
      <h1>Redux</h1>

      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <hr />

      <p>Todos</p>
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
                className="me-2"
                onClick={() => handleUpdateTodo(todo.id)}
              >
                {todo.title}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Redux;
