import mongoose from "mongoose"


const serviceSchema = new mongoose.Schema({
    servicetype: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    services: {
        type: [String],
        required: true
    },
    available: { type: Boolean, default: true },
    date: { type: Number, default:Date.now() },
    slots_booked: { type: Object, default: {} }

}, { minimize: false })

const serviceModel = mongoose.models.service || mongoose.model('service', serviceSchema)
export default serviceModel