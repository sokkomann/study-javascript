const promise = new Promise((resolve, reject) => {
    let check = true;

    if (check) {
        resolve("resolve");
    } else {
        reject("reject");
    }
});

let data = null;

promise
    .then((result) => {
        data = result;
        console.log(result);
        return 10; //.then()에서 값을 반환하면 그 값이 다음 .then()의 입력값이 됩니다(Promise 체이닝의 핵심 기능입니다)
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

console.log(data); // 첫번째출력

// Promise 생성:
// new Promise((resolve, reject) => {
//                ↓
//     resolve("값")  ──┐
// })                  │
//                     │ Promise 내부에 저장
//                     │
// .then((result) ← ───┘ 저장된 값이 여기로 전달
//     console.log(result)
// )
