const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function handleToDoSubmit(event) {
  event.preventDefault();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
