import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    post : {
        type : String,
        required : true,
        min : 1,  //So No Empty Post 
        max : 254 //Max Length Of A Post
    }
})

const postmodel = mongoose.model("postSchema", postSchema);
export default postmodel