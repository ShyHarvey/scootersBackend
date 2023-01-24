import Express from "express";
import mongoose from "mongoose";
import scootersRouter from "./scootersRouter.js";

const PORT = 5000;
const DB_URl = 'mongodb+srv://admin:admin@cluster0.4g5iodw.mongodb.net/?retryWrites=true&w=majority'

const app = Express()

app.use(Express.json())
app.use('/catalog', scootersRouter)


async function startApp() {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(DB_URl)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT 5000',))
    } catch (e) {
        console.log(e)
    }
}


startApp()