

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true,  },
    lastname: { type: String, required: true },
    mobile:{type:String, required:true},
    email: { type: String, required: true ,unique:true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

const usermodel = mongoose.model("user", userSchema)

module.exports = usermodel