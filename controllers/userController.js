const userModel = require('../models/userModel.js');
// console.log(taskModel.insertMany());

exports.login =async (req, res) => {
    const { username,password } = req.body;
    try {
        const user = await userModel.findOne({ username, password })
        if (user) {
            res.status(200).json( {
                status: 200,
                user 
            })
        }
        else {
            res.status(400).json({
                status: 400,
                message: {
                    error: 'username of password is incorrect'
                }
            })
        }
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


exports.singup =async (req, res) => {
    const { username,password,userType } = req.body;
    try {
        const usermodel = new userModel({ username, password,userType })
        const user = await usermodel.save();
        if (user) {
            res.status(200).json( {
                status: 200,
                user 
            })
        }
        else {
            res.status(400).json({
                status: 400,
                message: {
                    error: 'username of password is incorrect'
                }
            })
        }
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

exports.findAllEmployees =async (req, res) => {
    try {
        const employees = await userModel.find({ userType: 'employee' });
        res.status(200).json({
            status: 200,
            employees
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