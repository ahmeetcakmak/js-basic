const express = require("express");
const {accessControl} = require("./middleware")
const users = [
    {id : 1,name: "Ahmet çakmak", place: "Hatay"},
     {id: 2, name: "Mehmet Emin", place: "Antalya"}
]

const app = express();

const PORT = 5000;

app.use(express.json())
//Get request


app.get("/users", (req, res, next) => {
    res.json({
        success: true,
        data: users
    })  ;
});
app.post("/users", (req, res, next) => {
    const user = req.body;
    console.log(req.body)
    res.json({
        success: true,
        data: "Post Request"
    })  ;
});
app.put("/users", (req, res, next) => {
    const id = parseInt(req.params.id)
    for(let i = 0; i<users.length;i++){
        if (users[i].id === id){
            users[i] = {
                ...users[i],
                ...req.body
            }
        }
    }
    res.json({
        success: true,
        data: "Put Request"
    })  ;
});
app.delete("/users", (req, res, next) => {
    res.json({
        success: true,
        data: "Delete Request"
    })  ;
});


app.listen(PORT, ()=>{
    console.log("server started PORT: " + PORT)
})