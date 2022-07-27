const taskDB = [
    {
        id: 1,
        title: "asdada",
        task: "asdadad",
        state: false
    }
]

/*
    {
        "id": 1,
        "title": "adsads",
        "task": "sadasdlkada",
        "state": true or false
    }
*/

// Solo se puede modificar el estado de la tarea, los demás datos no
// true = Completada, false = No Completada

const getAllTasks = () => {
    return taskDB
}

const getTaskById = (id) => {
    const taskArr = taskDB.filter(task => task.id === id)
    return taskArr[0]
}

const createTask = (taskObj) => {
    if(taskObj.title && taskObj.task) {
        if(taskDB.length === 0) {
            const newTask = {
                id: 1,
                title: taskObj.title,
                task: taskObj.task,
                state: false
            }
            taskDB.push(newTask)
            return newTask
        }
        const newTask = {
            id: taskDB[taskDB.length - 1].id + 1,
            title: taskObj.title,
            task: taskObj.task,
            state: false
        }
        taskDB.push(newTask)
        return newTask
    }
    return false
}

const updateTask = (newTask) => {
    if(newTask.id && newTask.state) {
        let indexTask = -1;
        const oldTask = taskDB.filter((task, index) => {
            if(task.id === newTask.id) {
                indexTask = index;
                return task
            }
        })
        if(oldTask.length !== 0){
            const updateDataTask = {
                ...oldTask[0],
                state: newTask.state
            }
            taskDB[indexTask] = {
                updateDataTask
            }
            return taskDB[indexTask]
        }
        return "Invalid id"
    }
    return "Missing data"
}

const deleteTask = (id) => {
    const index = taskDB.findIndex(task => task.id === id)
    if(index !== -1) {
        const removedTask = taskDB.splice(index, 1)
        return removedTask
    }
    return false
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}