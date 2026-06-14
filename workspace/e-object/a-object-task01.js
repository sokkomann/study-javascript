// js에선 중괄호만 있으면 객체.

// 중괄호를 쓰면 let user = new Object(); 가 생략된것
// 중괄호 안에 키밸류를 쓴다.->map구조
// let user = {
//     name: "한동석",
//     age: 20,
//     address: "경기도",
//     "data-x": 10,
// };

// console.log(user);

// // 1. 마침표로 접근
// console.log(user.name);

// // 새로운 프로퍼티 추가
// user.data = 0;
// console.log(user.data);

// // 2. 대괄호로 접근
// console.log(user["name"]);
// console.log(user["data-x"]);

// 기초실습: 회원 객체를 선언한다.
// 프로퍼티: 이름, 주소1, 주소2, 주소3
// 모든 프로퍼티를 출력해본다.
let user2 = {
    name: "누구세요",
    address1: "서울특별시",
    address2: "송파구",
    address3: "가락동",
    // printAddress: function () {
    //     for (let i = 0; i < 3; i++) {
    //         console.log(this[`address${i + 1}`]);
    //     }
    // }, // 함수를 프로퍼티로 함
}; //this쓸거면 무조건 function, arrow쓸거면 this쓰지말것

// user2.name = "김민중";
// user2.address1 = "서울특별시";
// user2.address2 = "송파구";
// user2.address3 = "가락동";

// console.log(user2);
for (let i = 0; i < 3; i++) {
    // console.log(user2["address" + (i + 1)]);
    console.log(this[`address${i + 1}`]); // 같은의미
}

user.printAddress();

// function() {}
// 접근한 객체가 this

// () => {}
// 선언된 scope 객체가 this

// 결론(상황마다 다름)
// 1) 클래스를 사용하지 않을 때
//    function() {}

// 2) 클래스를 사용할 때
//    () => {}

// class Test {
//     name = "Test";
//     obj = {
//         name: "obj",
//         printName: () => {
//             console.log(this.name);
//         },
//     };
// }

// let test = new Test();
// test.obj.printName();
