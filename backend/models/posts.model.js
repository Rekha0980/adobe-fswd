const mongoose= require("mongoose");
const postSchema=mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId },
    content: { type: String, required: true, minlength: 1, maxlength: 300 },
    likes: { type: Number, default: 0, min: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
   
})
const PostModel=mongoose.model("post",postSchema)

module.exports={
    PostModel
}