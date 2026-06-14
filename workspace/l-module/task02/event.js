const button = document.getElementById("getTodo");
// const input = document.querySelector("input[name=page]");

button.addEventListener("click", (e) => {
    todoService.getList(todoLayout.showTodo);
    // todoService.getList(input.value, todoLayout.showTodo);
});
