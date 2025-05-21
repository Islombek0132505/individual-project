import { Schema, model, models } from "mongoose";

const ProductScheme = new Schema(
    {
        imageUrl: {type: String},
        productName: {type: String},
        price: {type: Number},
        rating: {type: Number},
        data: {type: String},
    },
    { timestamps: true }
)

const Product = models.Product || model("Product", ProductScheme)
export default Product