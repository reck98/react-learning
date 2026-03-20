import "./App.css";
import { useState } from "react";

function App() {
    const [counterValue, setCounterValue] = useState(5);

    const handleAddValue = () => {
        console.log("Counter Value: ", counterValue);
        setCounterValue(counterValue + 1);
        console.log("Counter Value: ", counterValue);
    };

    const handleRemoveValue = () => {
        setCounterValue((prev) => {
            if (prev != 0) {
                prev -= 1;
            }
            return prev;
        });
    };

    return (
        <>
            <h1>My Counter App</h1>
            <p>Counter value: {counterValue}</p>

            <button onClick={handleAddValue}>Add Value</button>
            <br />
            <button onClick={handleRemoveValue}>Remove Value</button>
        </>
    );
}

export default App;
