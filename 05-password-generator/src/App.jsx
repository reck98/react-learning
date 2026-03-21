import React, { useCallback } from "react";
import { useState, useEffect, useRef } from "react";
import passwordGenerator from "./utils/passwordGenerator";

export default function App() {
    const [length, setLength] = useState(8);
    const [isNumber, setIsNumber] = useState(false);
    const [isChar, setIsChar] = useState(false);
    const [password, setPassword] = useState("");

    console.log(isNumber);
    console.log(isChar);
    console.log(password);
    console.log(length);

    const passGen = useCallback(() => {
        setPassword(passwordGenerator(length, isNumber, isChar));
    }, [length, isNumber, isChar, setPassword]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        passGen();
    }, [passGen, length, isNumber, isChar]);

    // ref Hook

    const passwordRef = useRef(null);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(passwordRef.current.value);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
            <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 text-white">
                <h1 className="text-2xl font-semibold text-center mb-5 tracking-wide">
                    🔐 Password Generator
                </h1>

                {/* Input + Copy */}
                <div className="flex items-center bg-gray-900/60 rounded-xl overflow-hidden border border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 transition">
                    <input
                        type="text"
                        value={password}
                        placeholder="Generated Password"
                        readOnly
                        ref={passwordRef}
                        className="w-full bg-transparent px-4 py-2 outline-none text-sm tracking-wide"
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition px-4 py-2 text-sm font-medium"
                    >
                        Copy
                    </button>
                </div>

                {/* Controls */}
                <div className="mt-6 space-y-4">
                    {/* Length Slider */}
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <label>Password Length</label>
                            <span className="font-semibold">{length}</span>
                        </div>
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className="w-full accent-blue-500 cursor-pointer"
                            onChange={(e) => setLength(Number(e.target.value))}
                        />
                    </div>

                    {/* Checkboxes */}
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isNumber}
                                onChange={(e) => setIsNumber(e.target.checked)}
                                className="accent-blue-500"
                            />
                            Include Numbers
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isChar}
                                onChange={(e) => setIsChar(e.target.checked)}
                                className="accent-blue-500"
                            />
                            Special Characters
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
