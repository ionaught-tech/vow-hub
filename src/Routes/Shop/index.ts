import { Router } from "express"

const router = Router()

router.get("/",(_req,res)=>{
    return res.send({
        status:true,
        data:[
            {
                name: "Afsal",
                age:26,
            },
            {
                name: "Afsal",
                age:26,
            },
            {
                name: "Afsal",
                age:26,
            },
        ]
    })
})

export default router;