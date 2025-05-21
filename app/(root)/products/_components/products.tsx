"use client"

import { useState } from "react"
import { IProduct } from "@/app.types"
import ProductCard from "./product.card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface IProducts {
  products: IProduct[]
}

function Products({ products }: IProducts) {
  const [priceFrom, setPriceFrom] = useState("")
  const [priceTo, setPriceTo] = useState("")
  const [ratingFrom, setRatingFrom] = useState("")
  const [ratingTo, setRatingTo] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products)

  const handleFilter = () => {
    const priceFromNum = priceFrom ? parseFloat(priceFrom) : 0
    const priceToNum = priceTo ? parseFloat(priceTo) : Infinity
    const ratingFromNum = ratingFrom ? parseFloat(ratingFrom) : 0
    const ratingToNum = ratingTo ? parseFloat(ratingTo) : 5

    const filtered = products.filter((product) => {
      return (
        product.price >= priceFromNum &&
        product.price <= priceToNum &&
        product.rating >= ratingFromNum &&
        product.rating <= ratingToNum
      )
    })
    setFilteredProducts(filtered)
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4 bg-card p-5 rounded-xl border">
        <div>
          <p className="text-sm font-medium mb-1">Цена от</p>
          <Input
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Min"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value.replace(/^0+(?=\d)/, ""))}
          />
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Цена до</p>
          <Input
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Max"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value.replace(/^0+(?=\d)/, ""))}
          />
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Рейтинг от</p>
            <Input
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Min (0)"
                value={ratingFrom}
                onChange={(e) => {
                    const val = e.target.value.replace(/^0+(?=\d)/, "")
                    if (parseFloat(val) <= 5 || val === "") {
                        setRatingFrom(val)
                    }
            }}/>

        </div>
        <div>
          <p className="text-sm font-medium mb-1">Рейтинг до</p>
            <Input
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Max (5)"
                value={ratingTo}
                onChange={(e) => {
                    const val = e.target.value.replace(/^0+(?=\d)/, "")
                    if (parseFloat(val) <= 5 || val === "") {
                        setRatingTo(val)
                    }
            }}
/>
        </div>
        <div className="flex items-end">
          <Button onClick={handleFilter} className="w-full">
          Применить фильтр
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard {...item} key={item._id} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            Не найдено ни одного продукта по выбранным фильтрам.
          </p>
        )}
      </div>
    </div>
  )
}

export default Products
