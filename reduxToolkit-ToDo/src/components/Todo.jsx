import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";

function Todo() {
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex flex-col items-center py-10">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-white mb-8">My Todos</h1>

            {/* Todo List */}
            <ul className="w-full max-w-xl space-y-4">
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-white/10 backdrop-blur-md text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            {/* Todo Text */}
                            <span className="text-lg font-medium">
                                {todo.text}
                            </span>

                            {/* Delete Button */}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm font-semibold transition-all duration-200"
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Todo;
