"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type SortChartProps = {
  title: string;
  data: { name: string; value: number }[];
  color?: string;
};

export default function SortChart({ title, data, color = "#6366F1" }: SortChartProps) {
  return (
    <div className="bg-white border p-6 shadow-md w-full max-w-md rounded-3xl">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
