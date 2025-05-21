"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IUser } from "@/app.types";

const STATUS_OPTIONS = ["All", "Succesfully", "Loading", "Error"] as const;

function getStatusColor(status: string) {
  switch (status) {
    case "Succesfully":
      return "bg-green-100 text-green-800";
    case "Loading":
      return "bg-yellow-100 text-yellow-800";
    case "Error":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

interface UsersTableClientProps {
  initialUsers: IUser[];
}

export function UsersTableClient({ initialUsers }: UsersTableClientProps) {
  const [users] = useState<IUser[]>(initialUsers);
  const [sortBy, setSortBy] = useState<null | keyof IUser>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedStatus, setSelectedStatus] = useState<typeof STATUS_OPTIONS[number]>("All");

  const filteredUsers = users.filter(user => {
    if (selectedStatus === "All") return true;
    return user.status === selectedStatus;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortBy) return 0;

    if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (field: keyof IUser) => {
    const newOrder = sortBy === field && sortOrder === "asc" ? "desc" : "asc";
    setSortBy(field);
    setSortOrder(newOrder);
  };

  return (
    <div className="rounded-xl shadow-lg overflow-hidden border border-gray-300 p-6 bg-white">
      <div className="mb-4 flex items-center gap-2">
        <label htmlFor="statusFilter" className="font-semibold">
          Фильтр по статусу:
        </label>
        <select
          id="statusFilter"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value as typeof STATUS_OPTIONS[number])}
          className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {STATUS_OPTIONS.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="section-header rounded-tl-lg border-r border-gray-300 p-3 text-left">
              <Button
                variant="ghost"
                className={sortBy === "name" ? "text-blue-600 font-semibold" : "font-semibold"}
                onClick={() => handleSort("name")}
              >
                Имя <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            </th>
            <th className="section-header border-r border-gray-300 p-3 text-left">
              <Button
                variant="ghost"
                className={sortBy === "surname" ? "text-blue-600 font-semibold" : "font-semibold"}
                onClick={() => handleSort("surname")}
              >
                Фамилия <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            </th>
            <th className="section-header border-r border-gray-300 p-3 text-left">
              <Button
                variant="ghost"
                className={sortBy === "age" ? "text-blue-600 font-semibold" : "font-semibold"}
                onClick={() => handleSort("age")}
              >
                Возраст <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            </th>
            <th className="section-header border-r border-gray-300 p-3 text-left">
              <Button
                variant="ghost"
                className={sortBy === "payment" ? "text-blue-600 font-semibold" : "font-semibold"}
                onClick={() => handleSort("payment")}
              >
                Платёж ($) <ArrowUpDown className="ml-1 h-4 w-4" />
              </Button>
            </th>
            <th className="section-header rounded-tr-lg p-3 text-left font-semibold">Статус</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-6 text-gray-500 italic">
                Пользователей нет
              </td>
            </tr>
          ) : (
            sortedUsers.map((user, idx) => (
              <tr
                key={user._id}
                className={`transition-colors duration-200 hover:bg-gray-50 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="section-cell border-r border-gray-300 p-3 font-medium">{user.name}</td>
                <td className="section-cell border-r border-gray-300 p-3">{user.surname}</td>
                <td className="section-cell border-r border-gray-300 p-3">{user.age}</td>
                <td className="section-cell border-r border-gray-300 p-3">${user.payment}</td>
                <td className="section-cell p-3">
                  <Badge className={getStatusColor(user.status)} variant="outline">
                    {user.status}
                  </Badge>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

