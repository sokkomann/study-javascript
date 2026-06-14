const todoLayout = (() => {
    const showTodo = (todos) => {
        // const showTodo = (page, todo) => {
        const tbody = document.querySelector("table tbody");
        let text = ``;
        // let loadTodoList = 15;
        // // 1- 0 14     2- 15 29      3- 30 44
        // let start = (page - 1) * 15;
        // let end = page * loadTodoList;

        // let todoList = todos.slice(start, end);
        // todoList.forEach((todoo) => {
        //     text += `<tr>
        //     <td>${todoo.id}</td>
        //     <td>${todoo.userId}</td>
        //     <td>${todoo.title}</td>
        //     </tr>`;
        // });

        for (let i = 0; i < 20; i++) {
            text += `
                <tr>
                    <td>${todos[i].id}</td>
                    <td>${todos[i].userId}</td>
                    <td class="defaultRed">${todos[i].title}</td>
                </tr>
            `;
        }

        tbody.innerHTML = text;

        const titles = document.querySelectorAll("td.defaultRed");

        titles.forEach((title, i) => {
            let condition = todos[i].completed;
            title.classList.toggle("green", condition);
        });
    };

    return { showTodo: showTodo };
})();
