class ToDoService {

    constructor(todoRepository) { // Takes a 'new' repository layer class object as argument 
        this.todoRepository = todoRepository;
    }

    create(todoText) {
        if(todoText.length === 0) return;
        todoText = todoText.trim().toUpperCase();
        this.todoRepository.insert(todoText);
    }

    getATodo(id) {
        return this.todoRepository.get(id);
    }

    getAllTodos() {
        return this.todoRepository.getAll();
    }

};

module.exports = ToDoService;