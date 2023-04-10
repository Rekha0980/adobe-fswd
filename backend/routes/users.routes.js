const express = require("express")
require("dotenv").config()
const { UserModel } = require("../models/users.model")
const bcrypt = require('bcrypt');
const userRoutes = express.Router()




userRoutes.post("/", async (req, res) => {
    const { name, email, bio } = req.body
    try {
        const user = new UserModel({ name, email, bio })
        await user.save()
        res.send("Register")
    }
    catch (err) {
        console.log("error while connected to db")
        console.log(err)
    }

})

userRoutes.get("/:id",async (req, res) => {
    let id = req.params.id;
    const user=await UserModel.findById(id)
    res.send(user)
})

userRoutes.delete("/:id", async (req, res) => {
    const id = req.params.id
 try {
        await UserModel.findByIdAndDelete({ "_id": id })
        res.send("details DELETED")

    }
    catch (err) {
        console.log({ "err": "error deleting node" })
        console.log(err)
    }

})

userRoutes.put("/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
   const user= await UserModel.findByIdAndUpdate({_id:ID},payload)
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
    res.send(`updated detail with this ${ID}`)
    }

    catch(err){
        console.log(err)
        res.send({"err":"something wrong"})
            }
})

module.exports = {
    userRoutes
}