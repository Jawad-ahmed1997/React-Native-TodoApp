import { createContext, useReducer } from "react";

const initialState = {
  todos: [],
};
const reducer = (state, action) => {
  if (action.type === "update_todos") {
    return {
      ...state,
      todos: [action.payload.todos, ...state.todos],
    };
  }
  return state;
};

export const TodosContext = createContext(null);

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTodos = (todos) => {
    dispatch({
      type: "update_todos",
      payload: { todos: todos },
    });
  };
  return (
    <TodosContext.Provider value={{ ...state, updateTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
