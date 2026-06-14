const button = document.getElementById("get-todos");
const table = document.querySelector("table.todos");

button.addEventListener("click", (e) => {
    todoService.getTodoList(todoLayout.showTodoList);
});

table.addEventListener("click", (e) => {
    if (e.target.classList.contains("status")) {
        if (e.target.textContent === "미완료") {
            e.target.parentElement.classList.add("active");
            e.target.textContent = "완료";
            e.target.style.cursor = "unset";
        }
    }
});
