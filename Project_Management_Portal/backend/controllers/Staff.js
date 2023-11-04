const { sanitizeUser } = require("../common/common")
const Staff = require("../model/Staff")

// get Staff
exports.getById=async(req,res)=>{
    const {id}=req.params
    try {
        const staff=(await Staff.findById(id)).toObject()
        delete staff.password
        res.status(200).json(staff)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

// update Staff
exports.updateById=async(req,res)=>{
    const {id}=req.params
    try {
        const staff=await Staff.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(staff)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

// delete Staff
exports.deleteById=async(req,res)=>{
    const {id}=req.params
    try {
        const staff=await Staff.findByIdAndDelete(id)
        res.status(200).json(staff)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}
