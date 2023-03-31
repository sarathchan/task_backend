const taskModel = require('../models/taskModel.js');
const mongoose = require('mongoose');

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
    // const {taskId , assignedTo} = req.body;
    const {taskId , assignedTo, assignedBy} = req.body;

    try {
        const saved = await taskModel.updateOne({ _id: taskId } ,{ _id: taskId,assignedTo,assignedBy},{runValidators : true});
        // const saved = await taskModel.updateOne({ _id: taskId } ,{ _id: taskId,assignedTo});
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

exports.taskDone = async (req,res)=> {
    const {taskId} = req.body;

    try{
        console.log(taskId);
        if (!taskId) throw new Error('Task id not provided');
        // const taskDone = {}
        const taskDone = await taskModel.updateOne({ _id: mongoose.Types.ObjectId(taskId) } ,{_id: mongoose.Types.ObjectId(taskId) , taskDone : true},{runValidators : true});
        res.json( {
            status: 201,
            message : taskDone
        })
    }
    catch(err){
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
        const saved = await taskModel.find().populate('assignedBy','username');
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

exports.Tasks = async (req, res) => {
    // const {taskId , assignedTo} = req.body;

    try {
        const saved = await taskModel.find({taskDone : false}).populate('assignedBy','username');
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
        const saved = await taskModel.find({assignedTo:userId}).populate('assignedBy','username');
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