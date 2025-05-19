import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema (
    {
        name: {type: String},
        surname: {type: String},
        age: {type: Number},
        payment: {type: Number},
        status: {type: String}
    },
    {
        timestamps: true
    }
)

const User = models.User || model("User", UserSchema)
export default User