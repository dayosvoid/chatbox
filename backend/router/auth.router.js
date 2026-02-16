import express from "express"

const router = express.Router()

router.get("/signIn", (req,res)=>{
    res.send("signup endpint")
})

router.get("/login", (req,res)=>{
    res.send("login successsful")
})

router.get("/logout", (req,res)=>{
    res.send("logoout page")
})

export default router;