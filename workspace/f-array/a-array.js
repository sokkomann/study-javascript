const datas = [10, 4, 20, 6, 8];

console.log(datas);

// 값 추가
// push(값) : 배열 마지막에 값 추가.
// datas.push(3);
// console.log(datas);

// 값 연결
// join("문자열") : 전달한 값으로 각 요소를 구분하여 모두 연결해준다.
// console.log(datas.join(","));
// console.log([10, 30, 15].join(":"));

// 값 추출
// slice(begin, end) : 원하는 부분을 추출하기 위해 시작(포함)과 끝(제외) 인덱스를 전달한다. -> 얕은복사가 됨. 원본수정을 막기위해 쓴다.
console.log(datas.slice(0, 3));
console.log(datas);
// slice(begin) : 원하는 부분을 추출하기 위해 시작(포함) 인덱스를 전달하면 끝까지 추출한다.
// console.log(datas.slice(1)); // -> end에 undefined를 주면 begin부터 끝까지 함

// 값 삭제
// splice(index, count) : index부터 count개 삭제, 삭제된 값을 Array객체로 리턴
// console.log(datas.splice(2, 2));
// console.log(datas);

// 값 교체
// splice(index, count, ...args): index부터 count개 삭제, 삭제된 위치에 args에 전달된 값으로 대체
// console.log(datas.splice(2, 2, 100, 200));
// console.log(datas);

// 가변 인자
// const getTotal = (...numbers) => {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// };

// let result = getTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(result);

// pop(): 마지막 요소 삭제
// let result = datas.pop();
// console.log(result);
// console.log(datas);

// shift(): 첫 번째 요소 삭제
// let result = datas.shift();
// console.log(result, datas);

// 값 조회
// indexOf(값) , lastIndexOf(값)
// datas.push(4);
// console.log(datas.indexOf(4)); // -> 왼쪽부터 조회.
// console.log(datas.lastIndexOf(4)); // -> 오른쪽부터 조회.

// const datas2 = new Array(10);
// console.log(datas2.length); // -> 길이를 10으로 초기화 했기 때문에 10이 나온다.
// console.log(datas2); // -> 길이는 있지만 데이터가 없어서 <10 empty items> 나옴.

// const datas3 = new Array(10).fill(0);
// console.log(datas3.length);
// console.log(datas3);

// 반복
const datas4 = [3, 9, 5, 10, 1];

// 값 가져오기
// for (let a of datas4) {
//     console.log(a);
// }
// // 인덱스 가져오기
// for (let i in datas4) {
//     console.log(i);
// }

// forEach, map, filter 등등은 callback 함수 동작

// array.forEach((data, index, array) => {});
// 접근한 array객체로부터 각 요소를 data에 담고
// 각 인덱스를 index에 담는다.
// 접근한 array객체를 array에 담는다.
// datas4.forEach((datas4) => {
//     console.log(datas4);
// });
// datas4.forEach((d, i, ar) => {
//     console.log(d, i, ar);
// });
// datas4.forEach((d, i) => {
//     console.log(d, i);
// });
// datas4.forEach((d) => {
//     console.log(d);
// });

// 인덱스만 가져오고싶어요 -> 언더바로 자리수만 채움
// datas4.forEach((_, i) => {
//     console.log(i);
// });

// map((datas, indexe, array) => {

// });
// 전달한 callback 함수의 리턴값으로 변경
// let datas = new Array(10, 6, 4, 8, 2);
// datas = datas.map((data) => data - 1);
// console.log(datas);

// 기존 값을 두 배 증가시키기
// let datas = new Array(10, 6, 4, 8, 2);
// datas = datas.map((data) => data * 2);
// console.log(datas);

// filter((datas, indexe, array) => {

// });
// callback 함수의 리턴값이 true인 것만 추출
// let datas = new Array(10).fill(0).map((_, i) => i + 1);
// datas = datas.filter((data) => data > 4);
// console.log(datas);

// 1 ~ 100까지 담고 4의 배수만 추출
// let datas = new Array(100).fill(0).map((_, i) => i + 1);

// console.log(datas.filter((d) => d % 4 == 0));
// console.log(datas);
