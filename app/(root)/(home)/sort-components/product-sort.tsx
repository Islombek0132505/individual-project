"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  createdAt: string;
}

const initialProducts: Product[] = [
  { id: 1, name: "AirPods", price: 199, rating: 4.5, createdAt: "2024-04-20" },
  { id: 2, name: "iPhone", price: 999, rating: 4.8, createdAt: "2024-04-28" },
  { id: 3, name: "MacBook", price: 1299, rating: 4.9, createdAt: "2024-04-15" },
  { id: 4, name: "Apple Watch", price: 399, rating: 4.4, createdAt: "2024-04-18" },
];

export default function ProductSorter() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const sortByPrice = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const sortByRating = () => {
    const sorted = [...products].sort((a, b) => b.rating - a.rating);
    setProducts(sorted);
  };

  const sortByDate = () => {
    const sorted = [...products].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    setProducts(sorted);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <Button onClick={sortByPrice}>Сортировка: по цене (возрастание)</Button>
        <Button onClick={sortByRating}>Сортировка: по рейтингу</Button>
        <Button onClick={sortByDate}>Сортировка: по новизне</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>Цена: ${product.price}</p>
              <p>Рейтинг: ⭐ {product.rating}</p>
              <p>Дата добавления: {format(new Date(product.createdAt), "yyyy-MM-dd")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}