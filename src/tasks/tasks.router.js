const router = require("express").Router()
const httpUsers = require("./tasks.http")

router.route("/tasks")
    .get(httpUsers.getAll)
    .post(httpUsers.create)

router.route("/tasks/:id")
    .get(httpUsers.getById)
    .put(httpUsers.update)
    .delete(httpUsers.deleteById)

module.exports = {
    router
}