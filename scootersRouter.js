import { Router } from "express";
import scootersController from "./scootersController.js";

const scootersRouter = new Router()

scootersRouter.post('/scooters', scootersController.create)
scootersRouter.get('/scooters', scootersController.getAll)
scootersRouter.get('/scooters/:id', scootersController.getOne)
scootersRouter.put('/scooters', scootersController.update)
scootersRouter.delete('/scooters/:id', scootersController.deleteOne)

export default scootersRouter;