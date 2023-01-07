const mongoose = require('mongoose');
// mongoose.set("strictQuery",false)
const connectDatabase = () => {

    mongoose.connect(process.env.MONGO_URI,
        {useNewUrlParser: true,}).then(()=>{
        console.log("mongodb connection succesful")
    }).catch(err => {
        console.error(err)
    })
}

module.exports = connectDatabase