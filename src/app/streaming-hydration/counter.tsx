'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="mb-20 text-center">
      <h4 className="mb-7 text-2xl">{count}</h4>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={increment}
          className="py-3 px-6 border border-cyan-400 rounded-lg hover:bg-white hover:text-cyan-900"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="py-3 px-6 border border-cyan-400 rounded-lg hover:bg-white hover:text-cyan-900"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
