const express = require("express")
require("dotenv").config()
const { connection } = require("./configs/db")
const { userRoutes } = require("./routes/users.routes")
const { postRoutes } = require("./routes/posts.routes")



const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("homepage")

})

app.use("/users",userRoutes)
app.use("/post",postRoutes)




app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to DB")
    }
    catch (err) {
        console.log("error while connected to db")
        console.log(err)
    }
})