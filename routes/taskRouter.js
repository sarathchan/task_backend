const router = require('express').Router(); 
const { addTask ,assignTask,allTask,viewTask, taskDone, Tasks} = require('../controllers/taskController');

router.route('/').post(addTask).get(allTask);
router.route('/assignTask').post(assignTask);
router.route('/viewTask').post(viewTask);
router.route('/notDone').get(Tasks);
router.route('/taskDone').post(taskDone);


module.exports = router;