const express = require("express")
const taskRouter = require("./tasks/tasks.router").router

const app = express()
  
app.use(express.json())
// Aquí están las rutas

// Ruta para tareas
app.use('/api/v1', taskRouter)

app.listen(8000, () => {
    console.log('Server started at port 8000')
})