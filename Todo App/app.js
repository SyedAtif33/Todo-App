let idCounter = 1;

document.getElementById("inp").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const todosContainer = document.getElementById("todos");
    const inputField = document.getElementById("inp");

    if (inputField.value.trim() === "") {
        alert("Please enter a todo");
        return;
    }

    const todoItem = document.createElement("div");
    todoItem.id = idCounter;
    todoItem.className = "todo";

    todoItem.innerHTML = `
        <p>${inputField.value}</p>
        <button class="deleteBtn" onclick="deleteTodo(${idCounter})">Delete</button>
        <button class="updateBtn" onclick="updateTodo(${idCounter})">Update</button>
    `;

    todosContainer.appendChild(todoItem);
    inputField.value = "";
    idCounter++;
}

function deleteTodo(id) {
    const todoToDelete = document.getElementById(id);
    todoToDelete.remove();
}

function updateTodo(id) {
    const inputField = document.getElementById("inp");
    const todoText = document.getElementById(id).querySelector("p");

    if (inputField.value.trim() === "") {
        alert("Please enter a todo to update");
        return;
    }

    todoText.textContent = inputField.value;
    inputField.value = "";
}
