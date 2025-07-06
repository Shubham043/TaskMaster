import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "remove": {
      return state.filter((_, ind) => ind !== action.payload);
    }
    default:
      return state;
  }
}

function Todo() {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = () => {
    if (input.trim() !== "") {
      dispatch({ type: "add", payload: input });
      setInput("");
    }
  };

  const removeTodo = (index) => {
    dispatch({ type: "remove", payload: index });
  };

  return (
    <div className="min-h-screen   bg-gradient-to-r from-blue-500  to-red-500 flex items-center justify-center px-4">
      <div className="bg-white p-2 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Todo App</h1>

        <div className="flex items-center gap-2 mb-1 sm:mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a todo..."
            className="flex-grow p-1 sm:px-4 sm:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-600 p-1 text-white sm:px-4 sm:py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex p-1 text-white sm:font-bold  justify-between items-center bg-gray-600 sm:px-4 sm:py-2 rounded-md"
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="text-red-200 p-1 bg-red-600 sm:px-4 sm:py-2 rounded-md hover:text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
