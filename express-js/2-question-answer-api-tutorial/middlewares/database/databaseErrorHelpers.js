const User = require("../../models/User")
const Question = require("../../models/Question")
const CustomError = require('../../helpers/error/CustomError')
const asyncErrorWrapper = require("express-async-handler")

const checkUserExist = asyncErrorWrapper(async(req, res, next)=>{
    
    const {id} = req.params;

    const user = await User.findById(id);

if(!user){
    return next (new CustomError("there is no such user wtih that id",400));
}
next();
});


//check
const checkQuestionExist = asyncErrorWrapper(async(req, res, next)=>{
    
    const {id} = req.params;

    const question = await Question.findById(id);

if(!question){
    return next (new CustomError("there is no such question wtih that id",400));
}
next();
})

module.exports = {
    checkUserExist,
    checkQuestionExist
}