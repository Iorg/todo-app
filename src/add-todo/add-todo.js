import { createTodoElement } from "./createTodoElement.js";

var allTodosArray;
// JSON.stringify // object => string
// JSON.parse // string => object

allTodosArray = JSON.parse(localStorage.getItem("nosorog")) || [];

for (let index = 0; index < allTodosArray.length; index++) {
    // check shom how if we need to change that fucking array    
}

if (allTodosArray == null) {
    allTodosArray = [];
}
console.log("Start renderTodosArray");
renderTodosArray(allTodosArray);
console.log("End renderTodosArray");

var addButton = document.getElementById('addTodoBtn');

addButton.onclick = addTodo;

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
