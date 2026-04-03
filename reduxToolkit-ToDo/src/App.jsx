import React from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
    return (
        <>
            <h1 className="bg-green-700 p-4 text-center text-2xl text-white">
                {" "}
                Hello from react redux{" "}
            </h1>
            <AddTodo />
            <Todo />
        </>
    );
}

export default App;
