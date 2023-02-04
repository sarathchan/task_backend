const router = require('express').Router(); 
const { addTask ,assignTask,allTask,viewTask, taskDone} = require('../controllers/taskController');

router.route('/').post(addTask).get(allTask);
router.route('/assignTask').post(assignTask);
router.route('/viewTask').post(viewTask);
router.route('/taskDone').post(taskDone);


module.exports = router;