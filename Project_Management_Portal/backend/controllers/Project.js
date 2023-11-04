const Project=require('../model/Projects')


exports.create=async(req,res)=>{
    try {
        const newProject=new Project(req.body)
        await newProject.save()
        res.status(200).json(newProject)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}
exports.getAll=async(req,res)=>{
    try {
        const fetchedProjects=await Project.find({})
        res.status(200).json(fetchedProjects)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}
exports.getById=async(req,res)=>{
    const {id}=req.params
    try {
        const fetchedProject=await Project.findById(id)
        res.status(200).json(fetchedProject)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}
exports.getByProfessorId=async(req,res)=>{
    const {id}=req.params
    try {
        const fetchedProjects=await Project.find({staff:id})
        res.status(200).json(fetchedProjects)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

exports.updateById=async(req,res)=>{
    const {id}=req.params
    try {
        const updatedProject=await Project.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedProject)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}
exports.deleteById=async(req,res)=>{
    const {id}=req.params
    try {
        const deleted=await Project.findByIdAndDelete(id)
        res.status(200).json(deleted)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}