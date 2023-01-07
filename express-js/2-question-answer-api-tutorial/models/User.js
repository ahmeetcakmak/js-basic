
const mongoose = require("mongoose")
const bcyrpt = require('bcryptjs')
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const Question = require("./Question")
const UserSchema = new Schema({

    name :  {
        type : String,
        required : [true,"Please provide a email"]
    },
    email : {
        type : String,
        required : true,
        unique : true,
        match : [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a name"
        ]
    },
    role: {
        type : String,
        default : "user",
        enum : ["user","admin"]
    },
    password: {
        type : String,
        minlength : [6,"Please provide a password min length 6"],
        required :  [true, "Please provide a password"],
        select : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    title : {
        type : String
    },
    about : {
        type : String
    },
    place : {
        type : String
    },
    website :  {
            type : String
    },
    profile_image : {
        type : String,
        default : "default.jpg"
    },
    blocked : {
        type : Boolean,
        default : false
    },
    resetPasswordToken : {
        type : String
    },
    resetPasswordExpire: {
        type : Date
    },
    

})

//UserSchema Methods
UserSchema.methods.generateJwtFromUser = function(){
    const {JWT_SECRET_KEY,JWT_EXPIRE} = process.env;
const payload = {
    id : this._id,
    name: this.name
};
const token = jwt.sign(payload,JWT_SECRET_KEY,{
    expiresIn : JWT_EXPIRE
});
return token;
};



//Pre hooks
UserSchema.methods.getResetPasswordTokenFromUser = function(){
const randomHexString = crypto.randomBytes(15).toString("hex")
const {RESET_PASSWORD_EXPIRE} = process.env;


const resetPasswordToken = crypto.createHash("SHA256").update(randomHexString).digest("hex");

this.resetPasswordToken = resetPasswordToken;
this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);


}
UserSchema.pre("save",function(next){
    if(!this.isModified("password")){
        next();
    }
 
   bcyrpt.genSalt(10,(err,salt)=>{
    if (err) next(err)
    bcyrpt.hash(this.password,salt ,(err,hash)=>{
        if (err) next(err);
        this.password = hash;
        next()
    })
   })
    
});
UserSchema.post("remove",async function(){
    await Question.deleteMany({
        user: this._id
    });
})

module.exports = mongoose.model("User",UserSchema)