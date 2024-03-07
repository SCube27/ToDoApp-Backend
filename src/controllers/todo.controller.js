const ToDoService = require('../services/todo.service');
const ToDoRepository = require('../repositories/todo.repository');

const todoService = new ToDoService(new ToDoRepository());

function getTodos(req, res) {
    const response = todoService.getAllTodos();
    res.json({
        data : response
    });
}

function createTodos(req, res) {
    const response = req.body.todoText;
    todoService.create(response);
    res.json({
        data : 'New ToDo Created'
    });
}

module.exports = {
    getTodos,
    createTodos
};