var allTodosArray;
// JSON.stringify // object => string
// JSON.parse // string => object

allTodosArray = JSON.parse(localStorage.getItem("nosorog"));

for (let index = 0; index < allTodosArray.length; index++) {
    // check shom how if we need to change that fucking array    
}

if (allTodosArray == null) {
    allTodosArray = [];
}
console.log("Start renderTodosArray");
renderTodosArray(allTodosArray);
console.log("End renderTodosArray");

function addTodo() {
    console.log("Start addTodo");

    var todoInput = document.getElementById("todo-description");
    var text = todoInput.value;

    allTodosArray.push({name: text});

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
    for (var i = 0; i < array.length; i++) {
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
    liElement.textContent = text.name;
    liElement.appendChild(iElement);

    return liElement;
}

function deleteAddTodo() {
    console.log("Deleted");
}
