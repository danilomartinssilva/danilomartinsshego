import { Router } from 'express'
import ZumbiController from './app/controllers/ZumbiContrller'
import UserController from './app/controllers/UserController'
import LoginController from './app/controllers/LoginController'
import verifyToken from './app/middlewares/verifyToken'
import EquipamentController from './app/controllers/EquipamentController'
import ReinforcementController from './app/controllers/ReinforcementController'
const routes = new Router()


routes.get('/', async (req, res) => {
  res.json({
    status: true,
  }).status(200)
})

routes.get('/reinforcements', verifyToken, ReinforcementController.list)
routes.get('/equipaments', verifyToken, EquipamentController.list)
routes.post('/equipament', verifyToken, EquipamentController.create)
//Controllers- Zumbi
routes.post('/login', LoginController.login)
routes.get('/zumbi/list', verifyToken, ZumbiController.list)
routes.post('/user/add', UserController.save)
routes.get('/user', verifyToken, UserController.getById)

routes.post('/zumbi/add', verifyToken, ZumbiController.save)

module.exports = routes;