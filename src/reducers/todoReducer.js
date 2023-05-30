function todoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case "todo/add_todo": {
      const newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos };
    }
    case "todo/delete_todo": {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: newTodos };
    }
    case "todo/update_todo": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        return todo;
      });

      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
}

export default todoReducer;
