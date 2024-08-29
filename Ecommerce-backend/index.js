
const express = require("express")
const connetionTodb = require("./connection")
const userRouter = require("./routes/userauth/userauths")
const cors = require("cors")

const app = express()
const port = process.env.PORT
app.use(cors())

app.use(express.json())
connetionTodb()
app.use("/auth", userRouter)


app.listen(port, () => {

  console.log(`connection to port ${port}`)
})
