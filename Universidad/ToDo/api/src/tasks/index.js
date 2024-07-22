const express = require('express');
const router  = express.Router();
const {TaskConstroller} = require('./controller');

module.exports.TaskAPI = (app) => {
    router
    .get('/', TaskConstroller.getTasks)
    .get('/:id', TaskConstroller.getTask)
    .put('/:id', TaskConstroller.updateTask)
    .delete('/:id', TaskConstroller.deleteTask)
    .post('/', TaskConstroller.createTask)
    
    app.use('/api/tasks', router);
}