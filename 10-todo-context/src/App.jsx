import React, { useState } from "react";
import { ToDoProvider } from "./context";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            {
                id: Date.now(),
                ...todo,
            },
            ...todos,
        ]);
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) => {
            prev.map((t) => {
                if (t.id === id) {
                    return todo;
                }

                return t;
            });
        });
    };

    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos((prev) => {
            prev.map((t) => {
                if (t.id === id) {
                    t.isCompleted = !t.isCompleted;
                }
                return t;
            });
        });
    };


    

    return (
        <ToDoProvider
            value={{ todos, addTodo, removeTodo, updateTodo, toggleTodo }}
        >
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">{/* Todo form goes here */}</div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
        </ToDoProvider>
    );
}

export default App;
