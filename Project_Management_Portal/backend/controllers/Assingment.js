const Assignment=require("../model/Assignment")

exports.create=async(req,res)=>{
    try {
        const newAssignment=new Assignment(req.body)
        await newAssignment.save()
        res.status(201).json(newAssignment)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

exports.getAll=async(req,res)=>{
    const {id}=req.params
    try {
        const fetchedAssignment=await Assignment.find({student:id})
        res.status(200).json(fetchedAssignment)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}
exports.getByStudentId=async(req,res)=>{
    const {id}=req.params
    try {
        const fetchedAssignment=await Assignment.find({student:id}).populate("project")
        console.log(fetchedAssignment)
        res.status(200).json(fetchedAssignment)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

exports.deleteById=async(req,res)=>{
    const {id}=req.params
    try {
        const deleted=await Assignment.findByIdAndDelete(id)
        res.status(200).json(deleted)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}


