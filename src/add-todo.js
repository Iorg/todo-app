var allTodosArray;

// JSON.stringify // object => string
// JSON.parse // string => object

allTodosArray = JSON.parse(localStorage.getItem("nosorog"));

if (allTodosArray == null) {
    allTodosArray = [];
}

renderTodosArray(allTodosArray);

function addTodo() {
    var todoInput = document.getElementById("todo-description");
    var text = todoInput.value;

    allTodosArray.push(text);

    renderTodosArray(allTodosArray);

    localStorage.setItem("nosorog", JSON.stringify(allTodosArray));

    todoInput.value = "";

    console.log(allTodosArray);
}

function renderTodosArray(array) {
    // clear todo list
    var todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    // render all todos array
    for (let i = 0; i < array.length; i++) {
        var text = array[i];
        addTodoElementToList(text);
    }
}

function addTodoElementToList(text) {
    var todoList = document.getElementById("todo-list");

    var newTodoElement = createTodoElement(text);

    todoList.appendChild(newTodoElement);
}

function createTodoElement(text) {
    var liElement = document.createElement("li");
    var iElement = document.createElement("i");

    iElement.textContent = "delete";
    iElement.setAttribute("class", "material-icons");
    // iElement.setAttribute("onclick", "deleteAddTodo()");

    iElement.onclick = deleteAddTodo;

    // iElement.addEventListener("click", deleteAddTodo)

    liElement.setAttribute(
        "class",
        "list-group-item d-flex justify-content-between"
    );
    liElement.textContent = text;
    liElement.appendChild(iElement);

    return liElement;
}

function deleteAddTodo() {
    console.log("Deleted");
}
