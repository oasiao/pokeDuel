const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    avatar: {
        type: String,
    },
    name: {
        type: String, 
        required: true
    },
    surname : {
        type: String,
        required: true
    },
    
    pokemonTeam : {
        type: Array
    }, 
    createdAt: {
        type: Date,
        required: true
    }
})

const User = mongoose.model("User", UserSchema, "users");
module.exports = User;