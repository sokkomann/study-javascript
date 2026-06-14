const todoService = (() => {
    const getTodoList = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();

        if (callback) {
            callback(todos);
        }
    };

    return { getTodoList: getTodoList };
})();
