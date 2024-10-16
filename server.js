const express = require("express")
const userRoutes = require("./routes/user.route.js")


const app = express()

app.use(userRoutes)


app.listen(4000, ()=> {
    console.log("server started!")
})