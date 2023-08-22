import { Router } from "express"
const router = Router()

import UserController from './Controllers/User'

router.get('/', UserController.index)

export default router