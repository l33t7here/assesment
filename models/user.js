import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    admin : {
        type : Boolean,
        default : false
    }
})
const usermodel = mongoose.model("User", userSchema);
export default usermodel