const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRouter = require('./routes/taskRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(cors())
app.use(express.json());
app.use('/task', taskRouter);
app.use('/user', userRouter);

app.listen(3001, () => {
    console.log('started listening at port 3001');
})



mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://karthick:karthick@cluster0.keghdnv.mongodb.net', { useNewUrlParser: true, dbName: 'task_app' })
    .then(() => console.log('connected to database'))
    .catch(() => console.log('not connected to database'));