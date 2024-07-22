const {ObjectId} = require('mongodb');
const {Database} = require('../database/index');
const COLLECTION = 'tasks';

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return collection.findOne({_id: ObjectId(id)});
}

const create = async (task) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(task);
    return result.insertedId;
}

const update = async (task) =>{
    const collection = await Database(COLLECTION);
    const options = {upsert: false}; // Si no existe la tarea no la crea, True crea la tarea si no exite
    let result = await collection.updateOne({_id: ObjectId(task.id)}, {$set: task.body}, options);
    return result;
}

const deleteTask = async (id) => {
    const collection = await Database(COLLECTION);
    let result = await collection.deleteOne({_id: ObjectId(id)});
    return result;
}

module.exports.TaskService = {
    getAll,
    getById,
    create,
    update,
    deleteTask,
}