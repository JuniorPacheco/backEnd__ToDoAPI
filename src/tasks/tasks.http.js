const { getAllTasks, getTaskById, updateTask, createTask, deleteTask } = require("./tasks.controller")

// Obtiene todas las tareas
const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

//Obtiene una tarea en especifico
const getById = (req, res) => {
    const id = Number(req.params.id)
    if(id) {
        const data = getTaskById(id)
        if(data) {
            res.status(200).json(data)
        }else {
            res.status(400).json({message: "Invalid id"})
        }
    }else {
        res.status(400).json({message: "Id is not a number"})
    }
}

// Crea un tarea
const create = (req, res) => {
    const data = req.body
    const result = createTask(data)
    if(result) {
        res.status(200).json({message: "Task Created", task: result})
    }else {
        res.status(400).json({message: "Invalid Data"})
    }
}

//Actualiza el estado de una tarea
const update = (req, res) => {
    const data = req.body
    const result = updateTask(data)
    if(typeof result !== typeof "") {
        res.status(201).json({message: "Task Updated", task: result})
    }else {
        res.status(400).json({message: `${result}`})
    }
}

//Elimina una tarea
const deleteById = (req, res) => {
    const dataId = Number(req.params.id)
    if(dataId) {
        const data = deleteTask(dataId)
        if(data) {
            res.status(200).json({message: "Task deleted successfully"})
        }else {
            res.status(400).json({message: "Id is not found"})
        }
    }else {
        res.status(400).json({message: "Id is not a number"})
    }
}

module.exports = {
    getAll,
    getById,
    deleteById,
    create,
    update
}