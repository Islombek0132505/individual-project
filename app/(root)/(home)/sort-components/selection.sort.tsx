"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SelectionSortVisualizer() {
  const [array, setArray] = useState<number[]>([5, 1, 4, 2, 8]);
  const [inputValue, setInputValue] = useState("5, 1, 4, 2, 8");
  const [highlight, setHighlight] = useState<number | null>(null); 
  const [swapped, setSwapped] = useState<number | null>(null); 
  const [isSorting, setIsSorting] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const parseInput = () => {
    try {
      const nums = inputValue
        .split(",")
        .map((n) => parseInt(n.trim()))
        .filter((n) => !isNaN(n));
      if (nums.length < 2) throw new Error("введите не менее 2 цифр");
      setArray(nums);
      setError("");
    } catch (err: any) {
      setError(err.message || "Ошибка формата");
    }
  };

  const selectionSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;

      setHighlight(i); 

      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
        setHighlight(j); 
        await delay(500); 
      }

      if (minIdx !== i) {
        setSwapped(i); 
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]); 
        await delay(500); 
      }

      setHighlight(null); 
      setSwapped(null); 
    }

    setIsSorting(false); 
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-white flex flex-col items-center gap-8 w-full p-12 rounded-3xl border-2">
      <h1 className="text-4xl font-bold text-indigo-700">🏗️ Selection Sort Visualizer</h1>

      <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl w-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isSorting}
          className="flex-1 px-4 py-2 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Например: 5, 1, 4, 2, 8"
        />
        <button
          onClick={parseInput}
          disabled={isSorting}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition disabled:opacity-50"
        >
          Применить массив
        </button>
      </div>

      {error && <p className="text-red-500 font-medium">{error}</p>}

      <div className="flex items-end gap-3 min-h-64">
        {array.map((num, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="mb-2 text-sm font-semibold text-gray-700">{num}</span>

            <motion.div
              layout
              initial={{ scaleY: 0 }}
              animate={{
                height: `${num * 2.5}px`,
                scaleY: 1,
                transition: { type: "spring", stiffness: 80 },
              }}
              className={`w-10 rounded-t-xl shadow-md transition-transform duration-300 ${
                highlight === idx
                  ? "bg-gradient-to-t from-yellow-400 to-red-500" 
                  : swapped === idx
                  ? "bg-gradient-to-t from-pink-400 to-purple-500" 
                  : "bg-gradient-to-t from-blue-300 to-blue-600"
              } hover:scale-105`}
            ></motion.div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={selectionSort}
          disabled={isSorting}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
        >
          Начать сортировку
        </button>
      </div>
    </div>
  );
}

