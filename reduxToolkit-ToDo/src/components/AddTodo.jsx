import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
    const [input, setInput] = React.useState("");

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        if (!input) {
            return;
        }
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div className="flex justify-center bg-linear-to-br from-slate-900 to-slate-800 text-white">
            <form
                onSubmit={addTodoHandler}
                className="w-full max-w-xl flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl shadow-md"
            >
                {/* Input */}
                <input
                    type="text"
                    placeholder="✨ Add a new task..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-3 py-2 text-base"
                />

                {/* Button */}
                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
