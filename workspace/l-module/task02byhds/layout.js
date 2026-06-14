const todoLayout = (() => {
    const showTodoList = (todos) => {
        const tbody = document.querySelector("table.todos tbody");
        let text = ``;

        todos = todos.slice(0, 20);

        todos.forEach(({ userId, title, completed }) => {
            console.log(completed);
            text += `
                <tr ${completed && "class=active"}>
                    <td>${userId}</td>
                    <td>${title}</td>
                    <td class="status" ${
                        !completed && "style='cursor: pointer;'"
                    }>${completed ? "완료" : "미완료"}</td>
                </tr>
            `;
        });

        tbody.innerHTML = text;
    };

    return { showTodoList: showTodoList };
})();
