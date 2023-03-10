const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        message: "task name required"
    },
    assignedTo: { type: mongoose.Types.ObjectId, ref: 'users'},
    assignedBy : { type: mongoose.Types.ObjectId, ref: 'users'},
    taskDone : {type : Boolean, default : false }
});

module.exports = mongoose.model('tasks', taskSchema);
