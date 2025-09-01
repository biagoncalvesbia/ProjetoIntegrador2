import { GetAll } from "../controllers/admin.controller"

export const routerAdmin = Router()

routerAdmin.get('/allentrepreneursregister', GetAll)