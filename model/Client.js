import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        number: {
            type: Number,
            required: true
        },
        products: [],
        discount: {
            type: Number
        },
        advance: {
            type: Number
        },
        totalAmount: {
            type: Number
        },
        afterDelivery: {
            type: Number
        },
    },
    { timestamps: true }
)

const ClientData = mongoose.model('ClientData', clientSchema)

export default ClientData;
