import { Router } from 'express'

import { UserRoute } from './routes/UserRoute'
import { UserService } from './service/impl/user-service'

const routes = Router()
const userRoute = new UserRoute(new UserService())

routes.get('/users/', userRoute.getUsers)
routes.post('/users/', userRoute.createUser)
routes.patch('/users/:id', userRoute.updateUser)
routes.delete('/users/:id', userRoute.deleteUser)

export default routes
