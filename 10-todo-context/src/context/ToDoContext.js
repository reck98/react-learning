/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            text: "Learn React",
            isCompleted: false,
        },
    ],

    addTodo: (todo) => {},
    toggleTodo: (id) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export default function useToDo() {
    return useContext(ToDoContext);
}
