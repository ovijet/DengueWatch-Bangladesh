"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const State = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <button
        onClick={() => setState(!state)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {state ? <X /> : <Menu />}
      </button>

      {state && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p>This is the stateful content!</p>
        </div>
      )}
    </div>
  );
};

export default State;
