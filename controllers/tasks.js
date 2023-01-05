
const Task  = require("../models/Task")



// we get all task with the get method
const getAllTasks = async (req,res)=>{
    try {
        const tasks =   await Task.find({})
      res.status(200).json(tasks) // status code 200 means request ha been received and been processed succesfully
    } catch (error) {
        
        res.status(500).json({msg:error})
    }
      
    
}
 

// create new task with the post method

const createTasks = async (req,res)=>{
    try {
         const task = await Task.create(req.body);
        res.status(201).json({task})
        
        
    } catch (error) {
        res.status(500).json({msg:error})        
    }
    
}


const getTask =  async  (req,res)=> {
    try {
        const {id:taskID} = req.params //destructuring the req.params objects and saving the id to taskID
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return res.status(404).json({msg: `task with id : ${taskID} do not exist`}) // if id is not present
        }
        res.status(200).json({task})
        

    } catch (error) {
        res.status(500).json({msg:error})     
    }
}






const updateTask =  async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task =  await Task.findByIdAndUpdate({_id:taskID}, req.body,{
            runValidators: true,
            new:true,
            
        })
        if(!task){
            return  res.status(404).json({msg:`task with id : ${taskID} cannot be found`})
        }
        return res.status(200).json({task})

        
    } catch (error) {
         return res.status(500).json({error})
    }
}



const deleteTask =  async  (req,res)=>{
    try {
        const {id: taskID} = req.params
        const task =  await Task.findOneAndDelete({_id:taskID})
        if (!task){
            return res.status(404).json({msg: `Task with Id ${taskID} do not exist`})
        }
        res.status(200).json({msg:`deleted succesfully`})

    } catch (error) {
        res.status(500).json({msg: error})
    }
}


// instead of exporting each function, its goot to create an object and send all along at once
module.exports = {
    getAllTasks,
    createTasks, 
    getTask,
    updateTask,
    deleteTask
}