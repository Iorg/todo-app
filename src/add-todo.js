console.log("Hi!");

function addTodo() {
    var todoInput = document.getElementById("todo-description");
    var text = todoInput.value;

    var todos = getAllTodos();

    todos.push({
        text: text,
        isCompleted: false
    });

    saveAllTodos(todos);
}

function getAllTodos() {
    var allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    return allTodos;
}

function saveAllTodos(todos) {
    localStorage.setItem('allTodos', JSON.stringify(todos));
}