// 통신의 결과는 항상 promise로 리턴된다.
// fetch는 서버에 요청하는거 -> promise 객체로 리턴해요

fetch("https://jsonplaceholder.typicode.com/posts")
    // 중괄호가 없으니 리턴값이네 ->
    .then((response) => response.json()) // .json 메소드로 자바스크립트 객체로 바뀜
    // then에 전달한 콜백함수의 리턴이 있으면 그다음 then으로 전달
    .then((posts) => {
        result = posts;
    });
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//         const post = posts.filter((post) => post.id == 4);
//         console.log(post);
//     });

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//         posts
//             .map((post) => post.title)
//             .forEach((title, i) => {
//                 console.log(i + 1, title);
//             });
//     });

async function test() {
    return 10;
}
// async는 promise객체니까 풀어서쓰면 원래 아래인데 async로 퉁쳐서.
// function test() {
//     return new Promise((resolve, reject) => {
//         resolve(10);
//     });
// }

console.log(test()); // async는 promise객체니까 바로못써
// then붙여서써야함
test().then((result) => {
    console.log(result);
});

let result = await test();
console.log(result);
// await는 promise깔때
