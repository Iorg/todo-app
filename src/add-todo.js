var allTodosArray = [];

function addTodo() {
    var todoInput = document.getElementById("todo-description");
    var text = todoInput.value;

    allTodosArray.push(text);

    addTodoElementToList(text);
}

function addTodoElementToList(text) {
    var todoList = document.getElementById("todo-list")

    var newTodoElement = createTodoElement(text);

    todoList.append(newTodoElement)
}

function createTodoElement(text) {
    var liElement = document.createElement("li");
    var iElement = document.createElement("i");
    
    iElement.textContent = "delete" 
    iElement.setAttribute("class", "material-icons");

    liElement.setAttribute(
        "class",
        "list-group-item d-flex justify-content-between"
    );
    liElement.textContent = text;
    liElement.append(iElement);

    return liElement;
   
}
