import { Schema, model, models } from "mongoose";

const ProductScheme = new Schema(
    {
        imageUrl: {type: String},
        productName: {type: String},
        price: {type: String},
        rating: {type: Number},
        data: {type: Number},
    },
    { timestamps: true }
)

const Product = models.Course || model("Product", ProductScheme)
export default Product