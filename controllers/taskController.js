const taskModel = require('../models/taskModel.js');
// console.log(taskModel.insertMany());

exports.addTask =async (req, res) => {
    const body = req.body;
    try {
        const doc = new taskModel(body);
        const saved = await doc.save();
        res.json( {
            status: 201,
            message :{
                task : saved
            }
        })
        // cons
    }
    catch (err) {
        res.json({
            status: 400,
            message: {
                error : err.message
            }
        })
    }
}

exports.assignTask =async (req, res) => {
    const {taskId , assignedTo} = req.body;
    try {
        const saved = await taskModel.updateOne({ _id: taskId } ,{ _id: taskId,assignedTo});
        res.json( {
            status: 201,
            message :{
                task : saved
            }
        })

    }
    catch (err) {
        res.json({
            status: 400,
            message: {
                error : err.message
            }
        })
    }
}

exports.allTask = async (req, res) => {
    // const {taskId , assignedTo} = req.body;

    try {
        const saved = await taskModel.find();
        res.json( {
            status: 201,
            message :{
                tasks : saved
            }
        })

    }
    catch (err) {
        res.json({
            status: 400,
            message: {
                error : err.message
            }
        })
    }
} 
exports.viewTask = async (req, res) => {
    const {userId } = req.body;
console.log(userId)
    try {
        const saved = await taskModel.find({assignedTo:userId});
        res.json( {
            status: 201,
            message :{
                tasks : saved
            }
        })

    }
    catch (err) {
        res.json({
            status: 400,
            message: {
                error : err.message
            }
        })
    }
} 