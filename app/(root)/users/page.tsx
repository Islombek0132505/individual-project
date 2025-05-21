import AddUserDialog from "./_components/add-user.dialog";
import { getUsers } from "@/actions/user.action";
import { UsersTableClient } from "./_components/user-table";

async function UsersTable() {

  const users = await getUsers()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Таблица пользователей</h2>
        <AddUserDialog />
      </div>

      <UsersTableClient initialUsers={JSON.parse(JSON.stringify(users))} />
    </div>
  )
}

export default UsersTable