// "use client";

// import { useState, useMemo } from "react";
// import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
// import { ArrowUpDown, Check, X } from "lucide-react";

// type User = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: number;
//   payment: number;
//   blocked: boolean;
// };

// const initialUsers: User[] = [
//   { id: 1, firstName: "Ali", lastName: "Karimov", age: 23, payment: 120, blocked: false },
//   { id: 2, firstName: "Nodira", lastName: "Tursunova", age: 29, payment: 300, blocked: true },
//   { id: 3, firstName: "Javohir", lastName: "Bekmurodov", age: 19, payment: 200, blocked: false },
//   { id: 4, firstName: "Dilshod", lastName: "Aliyev", age: 34, payment: 450, blocked: true },
//   { id: 5, firstName: "Aziza", lastName: "Abdullayeva", age: 28, payment: 180, blocked: false },
// ];

// type SortKey = "firstName" | "lastName" | "age" | "payment";
// type SortOrder = "asc" | "desc";

// export default function UsersTable() {
//   const [users] = useState<User[]>(initialUsers);
//   const [sortKey, setSortKey] = useState<SortKey>("firstName");
//   const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
//   const [blockFilter, setBlockFilter] = useState<"all" | "blocked" | "unblocked">("all");

//   const sortedFilteredUsers = useMemo(() => {
//     let filtered = users;
//     if (blockFilter === "blocked") filtered = users.filter((u) => u.blocked);
//     if (blockFilter === "unblocked") filtered = users.filter((u) => !u.blocked);

//     return [...filtered].sort((a, b) => {
//       const valA = a[sortKey];
//       const valB = b[sortKey];
//       if (typeof valA === "string" && typeof valB === "string") {
//         return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
//       } else if (typeof valA === "number" && typeof valB === "number") {
//         return sortOrder === "asc" ? valA - valB : valB - valA;
//       }
//       return 0;
//     });
//   }, [users, sortKey, sortOrder, blockFilter]);

//   const toggleSort = (key: SortKey) => {
//     if (sortKey === key) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortKey(key);
//       setSortOrder("asc");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between gap-4">
//         <h2 className="text-2xl font-semibold">Foydalanuvchilar Jadvali</h2>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline">Blok Filter: {blockFilter}</Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuItem onClick={() => setBlockFilter("all")}>Hammasi</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setBlockFilter("blocked")}>Faqat bloklangan</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => setBlockFilter("unblocked")}>Faqat bloklanmagan</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>
//               <Button variant="ghost" onClick={() => toggleSort("firstName")}>
//                 Ism <ArrowUpDown className="ml-2 h-4 w-4" />
//               </Button>
//             </TableHead>
//             <TableHead>
//               <Button variant="ghost" onClick={() => toggleSort("lastName")}>
//                 Familiya <ArrowUpDown className="ml-2 h-4 w-4" />
//               </Button>
//             </TableHead>
//             <TableHead>
//               <Button variant="ghost" onClick={() => toggleSort("age")}>
//                 Yoshi <ArrowUpDown className="ml-2 h-4 w-4" />
//               </Button>
//             </TableHead>
//             <TableHead>
//               <Button variant="ghost" onClick={() => toggleSort("payment")}>
//                 To'lov ($) <ArrowUpDown className="ml-2 h-4 w-4" />
//               </Button>
//             </TableHead>
//             <TableHead>Holat</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {sortedFilteredUsers.map((user) => (
//             <TableRow key={user.id}>
//               <TableCell>{user.firstName}</TableCell>
//               <TableCell>{user.lastName}</TableCell>
//               <TableCell>{user.age}</TableCell>
//               <TableCell>${user.payment}</TableCell>
//               <TableCell>
//                 {user.blocked ? (
//                   <span className="text-red-500 font-medium inline-flex items-center gap-1">
//                     <X className="w-4 h-4" /> Bloklangan
//                   </span>
//                 ) : (
//                   <span className="text-green-600 font-medium inline-flex items-center gap-1">
//                     <Check className="w-4 h-4" /> Faol
//                   </span>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }


"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, Check, X } from "lucide-react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  payment: number;
  blocked: boolean;
};

const initialUsers: User[] = [
  { id: 1, firstName: "Али", lastName: "Каримов", age: 23, payment: 120, blocked: false },
  { id: 2, firstName: "Нодира", lastName: "Турсунова", age: 29, payment: 300, blocked: true },
  { id: 3, firstName: "Жавохир", lastName: "Бекмурадов", age: 19, payment: 200, blocked: false },
  { id: 4, firstName: "Дилшод", lastName: "Алиев", age: 34, payment: 450, blocked: true },
  { id: 5, firstName: "Азиза", lastName: "Абдуллаева", age: 28, payment: 180, blocked: false },
];

type SortKey = "firstName" | "lastName" | "age" | "payment";
type SortOrder = "asc" | "desc";

export default function UsersTable() {
  const [users] = useState<User[]>(initialUsers);
  const [sortKey, setSortKey] = useState<SortKey>("firstName");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [blockFilter, setBlockFilter] = useState<"all" | "blocked" | "unblocked">("all");

  const sortedFilteredUsers = useMemo(() => {
    let filtered = users;
    if (blockFilter === "blocked") filtered = users.filter((u) => u.blocked);
    if (blockFilter === "unblocked") filtered = users.filter((u) => !u.blocked);

    return [...filtered].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (typeof valA === "string" && typeof valB === "string") {
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }
      return 0;
    });
  }, [users, sortKey, sortOrder, blockFilter]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Таблица пользователей</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Фильтр:{" "}
              {blockFilter === "all"
                ? "Все"
                : blockFilter === "blocked"
                ? "Заблокированные"
                : "Активные"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setBlockFilter("all")}>
              Все
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBlockFilter("blocked")}>
              Только заблокированные
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setBlockFilter("unblocked")}>
              Только активные
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort("firstName")}>
                Имя <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort("lastName")}>
                Фамилия <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort("age")}>
                Возраст <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort("payment")}>
                Платёж ($) <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedFilteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>${user.payment}</TableCell>
              <TableCell>
                {user.blocked ? (
                  <span className="text-red-500 font-medium inline-flex items-center gap-1">
                    <X className="w-4 h-4" /> Заблокирован
                  </span>
                ) : (
                  <span className="text-green-600 font-medium inline-flex items-center gap-1">
                    <Check className="w-4 h-4" /> Активен
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
