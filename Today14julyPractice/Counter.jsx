// 1. Create a Counter Component.
// 2. Implement a Toggle Switch[Create a toggle switch component between &quot;On&quot; and &quot;Off&quot; states.]

import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="p-4 bg-white shadow-md rounded-xl text-center">
            <h2 className="text-xl font-bold mb-2">Counter: {count}</h2>
            <div className="space-x-2">
                <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
                <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
                <button onClick={() => setCount(0)} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
            </div>

            <div className="p-4 bg-white shadow-md rounded-xl text-center">
                <p className="text-lg mb-4">Switch is <strong>{isOn ? "On" : "Off"}</strong></p>
                <button onClick={() => setIsOn(!isOn)} className={`px-6 py-2 rounded ${isOn ? "bg-green-600" : "bg-gray-400"} text-white`}>
                    Toggle
                </button>
            </div>
        </div>
    );
};

export default Counter;
