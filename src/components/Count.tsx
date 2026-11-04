"use client";

import { decrement, increment, selectValue } from "@/Redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const value = useAppSelector(selectValue);
  const dispatch = useAppDispatch();
  return (
    <main className="min-h-screen bg-[#fafafa] flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-900">Counter</h1>

        <p className="text-[9px] tracking-[3px] font-semibold text-gray-400 mt-1">
          REDUX STATE
        </p>

        {/* Counter Value */}
        <h2 className="text-[72px] font-light text-gray-900 mt-5 mb-5">
          {value}
        </h2>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Decrement */}
          <button
            className="w-12 h-12 rounded-xl bg-[#111111] text-white text-xl shadow-md hover:bg-gray-800 active:scale-95 transition"
            onClick={() => dispatch(decrement())}
          >
            −
          </button>

          {/* Reset */}
          <button
            className="w-8 h-10 flex items-center justify-center text-gray-400 text-xl hover:text-black transition"
            onClick={() => dispatch({ type: "counter/reset" })}
          >
            ↻
          </button>

          {/* Increment */}
          <button
            className="w-12 h-12 rounded-xl bg-white border border-gray-200 text-gray-700 text-xl shadow-sm hover:bg-gray-100 active:scale-95 transition"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
