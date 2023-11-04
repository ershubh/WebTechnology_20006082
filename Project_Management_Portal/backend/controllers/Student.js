const { sanitizeUser } = require("../common/common");
const User = require("../model/Student");

// get user
exports.getById=async(req,res)=>{
    const {id}=req.params
    try {
        const user=(await User.findById(id)).toObject()
        delete user.password
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

// update user
exports.updateById=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

// delete user
exports.deleteById=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await User.findByIdAndDelete(id)
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}
