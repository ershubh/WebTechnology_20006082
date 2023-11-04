const mongoose=require('mongoose')
const {Schema}=mongoose

const assignmentSchema=new Schema({
    student:{
        type:Schema.Types.ObjectId,
        ref:"Student"
    },
    project:{
        type:Schema.Types.ObjectId,
        ref:'Project',
        required:true
    }
})

module.exports=mongoose.model('Assignment',assignmentSchema)