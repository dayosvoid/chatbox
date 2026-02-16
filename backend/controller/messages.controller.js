import express from "express"

const messages = (req,res)=>{
    res.send("message are being delivered")
}

export default {
    messages
}