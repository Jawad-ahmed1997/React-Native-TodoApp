import { useContext } from "react";
import { TodosContext } from "./index";

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context) throw new Error("ProductContext not found");
  return context;
};
