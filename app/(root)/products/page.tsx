import { getProduct } from "@/actions/product.action";
import AddProductDialog from "./_components/add-product.dialog";
import Products from "./_components/products";

async function UsersTable() {

  const products = await getProduct()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Таблица Продукты</h2>
        <AddProductDialog />
      </div>
     

      <Products products={JSON.parse(JSON.stringify(products))}/>

    </div>
  )
}

export default UsersTable