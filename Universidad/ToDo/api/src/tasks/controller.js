const debug          = require('debug')('app:task-controller');
const createError    = require('http-errors');
const {Response}     = require('../common/response');
const {TaskService}  = require('./services');

module.exports.TaskConstroller = {
    getTasks: async(req, res) => {
        try {
            let tasks = await TaskService.getAll();
            Response.success(res, 200, 'Lista de tareas', tasks);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    getTask: async(req, res) => {
        try {
            const {params: {id}} = req;
            let task = await TaskService.getById(id);
            if(!task){
                Response.error(res, createError.NotFound());
            }
            else{
                Response.success(res, 200, `Tarea ${id}`, task);
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    }, 
    createTask: async(req, res) => {
        try{
            const {body} = req;
            if(!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const insertId = await TaskService.create(body);
                Response.success(res, 201, "Tarea agregada", insertId);
            }
        }
        catch{
            debug(error);
            Response.error(res);
        }
    },
    updateTask: async(req, res) => {
        try {
            const {body, params:{id}} = req; 
            const task = {
                'id': id,
                'body': body
            }

            if(!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const result = await TaskService.update(task);
                Response.success(res,201, "Tarea actualizada", result)
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    deleteTask: async(req, res) => {
        try {
            const {params: {id}} =  req;
            let result = await TaskService.deleteTask(id);
            Response.success(res, 200, "Tarea eliminada", id);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    }
}