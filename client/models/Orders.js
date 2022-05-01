import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        maxlength: 250
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
    paymentChannel: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export default mongoose.models.Orders || mongoose.model('Orders', OrderSchema)