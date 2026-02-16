import express from "express"
const router = express.Router()

import messageController from "../controller/messages.controller.js"

router.get("/messages", messageController.messages)

export default router
