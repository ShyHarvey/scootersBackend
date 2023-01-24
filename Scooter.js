import mongoose from "mongoose";

const Scooter = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    cost: { type: String, required: true },
    rating: { type: String, required: true },
    image: { type: String, required: true }
})

export default mongoose.model('Scooter', Scooter)