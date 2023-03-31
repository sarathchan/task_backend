const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// userSchema.pre('save',async function(){
//     if (this.isModified('password')){
//         this.password = await bcrypt.hash(this.password,10);
//     }
// })

// userSchema.methods.verifyPassword = async function (password, encypted) {
//     return await bcrypt.compare(password, encypted);
// }

module.exports = mongoose.model('users', userSchema);
