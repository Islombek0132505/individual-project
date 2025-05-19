// import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead, } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { ArrowUpDown } from "lucide-react";
// import { getUsers } from "@/actions/user.action";
// import AddUserDialog from "./_components/add-user.dialog";

// async function UsersTable() {

//     const users = await getUsers()

//     return (
//         <div className="space-y-6">
//             <div className="flex items-center justify-between gap-4">
//             <h2 className="text-2xl font-semibold">Таблица пользователей</h2>
//             <AddUserDialog/>
//         </div>

//         <Table>
//             <TableHeader>
//                 <TableRow>
//                     <TableHead>
//                         <Button variant="ghost">
//                             Имя <ArrowUpDown className="ml-2 h-4 w-4" />
//                         </Button>
//                     </TableHead>
//                     <TableHead>
//                         <Button variant="ghost">
//                             Фамилия <ArrowUpDown className="ml-2 h-4 w-4" />
//                         </Button>
//                     </TableHead>
//                     <TableHead>
//                         <Button variant="ghost">
//                             Возраст <ArrowUpDown className="ml-2 h-4 w-4" />
//                         </Button>
//                     </TableHead>
//                     <TableHead>
//                         <Button variant="ghost">
//                             Платёж ($) <ArrowUpDown className="ml-2 h-4 w-4" />
//                         </Button>
//                     </TableHead>
//                     <TableHead>Статус</TableHead>
//                 </TableRow>
//             </TableHeader>
//             <TableBody>
//                 {users.map((user) => (
//                     <TableRow key={user._id}>
//                     <TableCell>{user.name}</TableCell>
//                     <TableCell>{user.surname}</TableCell>
//                     <TableCell>{user.age}</TableCell>
//                     <TableCell>${user.payment}</TableCell>
//                     <TableCell>
//                         {user.status}
//                     </TableCell>
//                     </TableRow>
//                 ))}
//             </TableBody>
//       </Table>
//     </div>
//   );
// }


// export default UsersTable


"use client"

import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { getUsers } from "@/actions/user.action";
import AddUserDialog from "./_components/add-user.dialog";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

async function fetchUsers() {
  return await getUsers();
}

function getStatusColor(status: string) {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "inactive":
      return "bg-yellow-100 text-yellow-800";
    case "blocked":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function UsersTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<null | string>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleSort = (field: string) => {
    const newOrder = sortBy === field && sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...users].sort((a, b) => {
      if (a[field] < b[field]) return newOrder === "asc" ? -1 : 1;
      if (a[field] > b[field]) return newOrder === "asc" ? 1 : -1;
      return 0;
    });
    setSortBy(field);
    setSortOrder(newOrder);
    setUsers(sorted);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Таблица пользователей</h2>
        <AddUserDialog />
      </div>

      <div className="rounded-xl shadow overflow-hidden border">
        <Table>
          <TableHeader className="bg-muted/40">
            <TableRow>
              {["name", "surname", "age", "payment"].map((field, i) => (
                <TableHead key={field}>
                  <Button
                    variant="ghost"
                    className={`flex items-center hover:bg-muted ${sortBy === field ? "text-primary" : ""}`}
                    onClick={() => handleSort(field)}
                  >
                    {field === "name" && "Имя"}
                    {field === "surname" && "Фамилия"}
                    {field === "age" && "Возраст"}
                    {field === "payment" && "Платёж ($)"}
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              ))}
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user._id}
                className={`transition-colors duration-200 hover:bg-muted/30 ${index % 2 === 0 ? "bg-background" : "bg-muted/10"}`}
              >
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>${user.payment}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(user.status)} variant="outline">
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default UsersTable;
