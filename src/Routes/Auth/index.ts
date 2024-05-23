import { Router } from "express"

const router = Router()

router.get("/",(_req,res)=>{
    return res.send("Auth API")
})

export default router;