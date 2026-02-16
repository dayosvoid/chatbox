import express from "express"
import dotenv from "dotenv"
import authRouters from "./router/auth.router.js"
import messageRouter from "./router/messages.router.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use("/api/auth",authRouters)
app.use("/api/messages", messageRouter)

app.listen(PORT,()=>console.log("app is listening on port 3000"))
