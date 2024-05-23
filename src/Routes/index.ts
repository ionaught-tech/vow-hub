import { Router } from "express"
const router = Router()

import Auth from "./Auth"
import Shop from "./Shop"

router.use("/auth",Auth)
router.use("/shop",Shop)

export default router;