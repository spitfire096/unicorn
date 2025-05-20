'use client';

import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);
    const [isIncrementing, setIsIncrementing] = useState(false);

    async function handleIncrement() {
        setIsIncrementing(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
        setCount(count + 1);
        setIsIncrementing(false);

        try {   
            const response = await fetch('/api/counter/increment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ count: count + 1 }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error incrementing count:', error);
        }  finally {
            setIsIncrementing(false);
        } 
    }

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
   