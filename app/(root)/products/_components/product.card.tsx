import { IProduct } from "@/app.types"
import Image from "next/image"

function ProductCard(product: IProduct) {
    return (
        <div className="flex flex-col rounded-2xl overflow-hidden border-4 border-gray-400">
            <Image
                src={product.imageUrl}
                alt="product image" 
                className="w-full h-[220px] object-contain"
                width={400}
                height={220}
            />
            <div className="p-4 border-t-4 border-gray-400 flex flex-col gap-2">

                <h1 className="font-bold text-xl">{product.productName}</h1>
                <p>
                    <span className="font-medium">Цена: </span>  
                    {product.price}$
                </p>
                <p>
                    <span className="font-medium">Рейтинг: </span>  
                    {product.rating} / 5
                </p>
                <p>
                    <span className="font-medium">Дата: </span>  
                    {product.data}
                </p>
            </div>
        </div>
    )
}

export default ProductCard