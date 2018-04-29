export function loadTodos() {
   var todoFromStorage = JSON.parse(localStorage.getItem("nosorog")) || [];
    return todoFromStorage
}

export function saveTodos(todos) {
    localStorage.setItem("nosorog", JSON.stringify(todos))
}
