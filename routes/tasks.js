const express = require("express")
const router = express.Router();
const  {getAllTasks,createTasks,getTask,updateTask,deleteTask} = require("../controllers/tasks")




//Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware. 
router.route("/").get(getAllTasks).post(createTasks)

router.route("/:id").get(getTask)
.patch(updateTask)
.delete(deleteTask)
module.exports = router