const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://week-08:21bec017%40@cluster0.2rolr.mongodb.net/")


const UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    user_email: {
        type: String,
        require: true 
    },
    password:{
        type: String,
        require: true
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = {
    User
}