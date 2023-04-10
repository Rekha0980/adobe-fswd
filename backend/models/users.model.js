const mongoose= require("mongoose");
const userSchema=mongoose.Schema({
    name: { type: String, required: true, minlength: 1, maxlength: 50 },
    email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    bio: { type: String, maxlength: 200 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
   
})
const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}