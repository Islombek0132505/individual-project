"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { size: 10, bubble: 15, insertion: 12, selection: 14, merge: 5, quick: 6, heap: 7 },
  { size: 100, bubble: 300, insertion: 270, selection: 280, merge: 60, quick: 70, heap: 80 },
  { size: 500, bubble: 7500, insertion: 7200, selection: 7300, merge: 1000, quick: 900, heap: 1100 },
  { size: 1000, bubble: 30000, insertion: 28000, selection: 29000, merge: 2000, quick: 1700, heap: 2200 },
]

export default function SortingComparisonChart() {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-md mt-10">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-indigo-600 mb-4">
          🔍 Сравнение производительности алгоритмов сортировки
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          График показывает относительное время выполнения различных алгоритмов сортировки при увеличении количества элементов. Значения условны и даны для сравнения.
        </p>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="size" label={{ value: "Размер массива", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Время (мс)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bubble" stroke="#f87171" name="Bubble Sort" />
            <Line type="monotone" dataKey="insertion" stroke="#fb923c" name="Insertion Sort" />
            <Line type="monotone" dataKey="selection" stroke="#facc15" name="Selection Sort" />
            <Line type="monotone" dataKey="merge" stroke="#34d399" name="Merge Sort" />
            <Line type="monotone" dataKey="quick" stroke="#60a5fa" name="Quick Sort" />
            <Line type="monotone" dataKey="heap" stroke="#a78bfa" name="Heap Sort" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
