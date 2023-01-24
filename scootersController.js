import Scooter from "./Scooter.js"


class ScootersController {
    async create(req, res) {
        try {
            const { id, name, cost, rating, image } = req.body
            const scooter = await Scooter.create({ id, name, cost, rating, image })
            res.json(scooter)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const allScooters = await Scooter.find()
            return res.json(allScooters)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            if (!req.params.id) {
                res.status(400)
            }
            const scooter = await Scooter.findById(req.params.id)
            return res.json(scooter)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async deleteOne(req, res) {
        try {
            if (!req.params.id) {
                res.status(400)
            }
            const scooter = await Scooter.findByIdAndDelete(req.params.id)
            return res.json(scooter)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const scooter = req.body
            if (!scooter._id) {
                res.status(400)
            }
            const updatedScooter = await Scooter.findByIdAndUpdate(scooter._id, scooter, { new: true })
            return res.json(updatedScooter)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new ScootersController;