// 지역 변수: 중괄호 영역 안에 선언된 변수
// 전역 변수: 어떠한 영역에도 갇혀있지 않고 선언된 변수(중괄호 밖에 선언된 변수)

// f();
// console.log(data);

// Node.js에서 global 공간을 따로 만들어놨기 때문에
// 이름이 중복되는 것을 방지하고자 global 안에 전역 변수를 선언한다.
// global.x = 10;

// 브라우저에서도 실행하고, Node.js로도 실행하려면,
// window와 global을 동시에 사용해야 하는 문제가 생긴다.
// 이를 해결하기 위해 globalThis를 사용한다.
// globalThis는 상황에 맞게 global 또는 window로 사용해준다.
globalThis.x = 10;
function f() {
    let x = 20;

    console.log(globalThis.x);
}

f();
