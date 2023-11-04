require("dotenv").config()
const { sanitizeUser } = require("../common/common")
const Staff = require("../model/Staff")
const Student = require("../model/Student")
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')

exports.createStaff=async(req,res)=>{
    try {

        const existingStaff=await Staff.findOne({staffId:req.body.staffId})

        if(existingStaff){
            return res.status(400).json({"message":"already existing"})
        }
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        req.body.password=hashedPassword
        const newStaff=new Staff(req.body)
        await newStaff.save()

        res.status(201).json(sanitizeUser(newStaff))

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

exports.createStudent=async(req,res)=>{
    try {

        const existingStudent=await Student.findOne({id:req.body.id})
        if(existingStudent){
            return res.status(400).json({"message":"already existing"})
        }

        const hashedPassword=await bcrypt.hash(req.body.password,10)
        req.body.password=hashedPassword

        const newStudent=new Student(req.body)
        await newStudent.save()

        res.status(201).json(sanitizeUser(newStudent))

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}

exports.loginStaff=async(req,res)=>{
    try {
        const isExisiting=await Staff.findOne({staffId:req.body.staffId})
        if(!isExisiting){
            return res.status(400).json({"message":"invalid credentails"})
        }
        if(isExisiting && await bcrypt.compare(req.body.password,isExisiting.password)){

            const data=sanitizeUser(isExisiting)
            const payload={...data,role:"staff"}

            const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"24hr"})
            res.cookie('token',token,{
                path:"/",
                expires:new Date(Date.now() + 60 * 60 * 1000),
                httpOnly:true,
                sameSite:"lax"
            })

            res.status(200).json(payload)
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}
exports.loginStudent=async(req,res)=>{
    try {
        const isExisiting=await Student.findOne({id:req.body.id})
        if(!isExisiting){
            return res.status(400).json({"message":"invalid credentails"})
        }
        if(isExisiting && await bcrypt.compare(req.body.password,isExisiting.password)){
            const data=sanitizeUser(isExisiting)
            const payload={...data,role:"student"}
            const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"24hr"})
            res.cookie('token',token,{
                path:"/",
                expires:new Date(Date.now() + 60 * 60 * 1000),
                httpOnly:true,
                sameSite:"lax"
            })

            res.status(200).json(payload)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
    }
}


exports.logout=async(req,res)=>{
    res.cookie('token',null,{expires:new Date(Date.now()),httpOnly:true}).sendStatus(200)
}

exports.checkAuth=async(req,res)=>{
    if(req.user){
        return res.status(200).json(req.user)
    }
    else{
        return res.sendStatus(401);
    }
}