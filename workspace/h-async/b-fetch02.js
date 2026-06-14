// 통신의 결과는 항상 promise로 리턴된다.
// const getPosts = async () => {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         posts.forEach((post, i) => {
//             console.log(i + 1, post.title);
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
// getPosts();
// async를 붙이는 순간 비동기가 됨 그니까 마치 동기처럼 async-await 문법
// 다 비동기니까 굳이 넣다뺏다 할필요 x
// 대신 promise객체를 한번 깔려면 await를 붙임
// -> fetch의 리턴타입은 promise, promise객체가 await를 만나서 깨지고 response에 담기고
// response.json 도 promise객체니까 await로 깨지고 posts에 담기고
// await는 then의 역할을 하는거야

const postService = (() => {
    const getList = async (callback, page = 1) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const posts = await response.json();

            if (callback) {
                callback(posts);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return { getList: getList };
})();

const printPostTitles = (posts) => {
    posts
        .map((post) => post.title)
        .forEach((title) => {
            console.log(title);
        });
};

postService.getList(printPostTitles);
