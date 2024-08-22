
 require("dotenv").config()
const mongoose = require("mongoose")



const connetionTodb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
       console.log("connection done mongo")
    } catch (error) {
         console.log("error while connection ",error)
    }

}

module.exports= connetionTodb