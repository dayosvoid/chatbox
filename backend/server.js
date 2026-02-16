import express from "express"
import dotenv from "dotenv"
import authRouters from "./router/auth.router.js"
import messageRouter from "./router/messages.router.js"
import path from "path"

dotenv.config()

const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use("/api/auth",authRouters)
app.use("/api/messages", messageRouter)
if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*", (_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

app.listen(PORT,()=>console.log(`app is listening on port ${PORT}`))
