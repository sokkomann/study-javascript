let result = f(2);
console.log(result);

// let result2 = g(6, 5);
// console.log(result2);

const result2 = g(6, 5); // 함수의 결과는 변하지 않으니 상수로 합시다. 대신 변수명은 대문자말고 소문자로 합시다.
console.log(result2);

function f(x) {
    return 2 * x + 1;
}
// 전제: 함수가 먼저 메모리에 올라간다.
// 이렇게 함수를 연산보다 밑에 선언해도 함수가 메모리에 먼저 올라가니까 잘 실행됨 -> 호이스팅이라고함(그냥 그렇구나)

// 두 정수의 곱셈을 구해주는 함수
function g(x, y) {
    return x * y;
}
