"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Bubble Sort", time: 25 },
  { name: "Insertion Sort", time: 18 },
  { name: "Selection Sort", time: 20 },
  { name: "Merge Sort", time: 8 },
  { name: "Quick Sort", time: 6 },
  { name: "Heap Sort", time: 9 },
  { name: "Radix Sort", time: 5 },
];

export default function SortPerformanceChart() {
  return (
    <Card className="p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">
        Сравнение времени выполнения алгоритмов сортировки
      </h2>
      <p className="text-center text-sm text-muted-foreground mb-4">
        Значения условные (в миллисекундах) и зависят от количества данных. Диаграмма показывает, насколько каждый алгоритм эффективен по сравнению с другими.
      </p>

      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-20} textAnchor="end" />
            <YAxis label={{ value: "Время (мс)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="time" name="Время выполнения" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
