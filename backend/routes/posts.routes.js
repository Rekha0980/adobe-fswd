const express = require("express")
const { PostModel } = require("../models/posts.model")
require("dotenv").config()

const postRoutes = express.Router()




postRoutes.post("/", async (req, res) => {
    const { user_id, content, likes } = req.body
    try {
        const user = new PostModel({ user_id, content, likes })
        await user.save()
        res.send("post created")
    }
    catch (err) {
        console.log("error while connected to db")
        console.log(err)
    }

})

module.exports = {
    postRoutes
}