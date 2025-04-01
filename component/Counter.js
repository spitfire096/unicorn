'use client';

import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="text-2xl font-bold">{count}</p>
            <div className="flex gap-2">
                <button 
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Increment
                </button>
                <button 
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
   