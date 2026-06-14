const todoService = (() => {
    const getList = async (callback) => {
        // const getList = async (page, callback) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );
            const todos = await response.json();

            if (callback) {
                callback(todos);
                // callback(page, todo);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return { getList: getList };
})();
