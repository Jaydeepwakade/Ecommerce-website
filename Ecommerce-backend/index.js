
const express = require("express")
const connetionTodb = require("./connection")

const cors = require("cors")
const CrudRouter = require("./routes/CrudRoutes/crudroutes")
const userRouter = require("./routes/userauth/userauths")

const app = express()
const port = process.env.PORT
app.use(cors())

app.use(express.json())

app.use("/auth", userRouter)
app.use("/products", CrudRouter)


app.listen(port, async() => {
 await connetionTodb()
  console.log(`connection to port ${port}`)
})
