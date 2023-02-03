const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        message: "username is required"
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'password is less than 8 characters'],
    },
    userType: {
        type: String,
        enum: ['admin', 'employee']
    }
})
module.exports = mongoose.model('users', userSchema);
