const express = require("express");
const dotenv = require("dotenv")
const connectDatabase = require("./helpers/database/connectDatabase")
const customErrorHandler = require("./middlewares/errors/customErrorHandler")
const path = require("path")

const routers = require("./routers")


// Environment Variables
dotenv.config({
    path : "./config/env/config.env"
})
//mongodb connectıon 
connectDatabase();
const app = express();

//express - body midleware
app.use(express.json())

const PORT =  process.env.PORT;

app.use("/api",routers)



// app.use("/api/questions", question)
// app.use("/api/auth",auth)
// app.use("/api/answers")
app.use(customErrorHandler)
//static
console.log(__dirname)
app.use(express.static(path.join(__dirname,"public")))
app.listen(PORT, ()=>{
    console.log(`App Started on ${PORT}: ${process.env.NODE_ENV}`);
})
// app.get("/api/questions", (req,res) => {
//     res.send("Questions home page")
// })
// app.get("/api/questions/delete", (req,res) => {
//     res.send("Questions delete page")
// });
// app.get("/api/auth", (req,res) => {
//     res.send("auth home page")
// })
// app.get("/api/auth/register", (req,res) => {
//     res.send("auth register page")
// })
