export function createTodoElement(text) {
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

// export { createTodoElement }
