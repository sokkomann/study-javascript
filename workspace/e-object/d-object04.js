const user = {
    name: "홍길동",
    age: 20,
    gender: "남자",
};
console.log(user);
console.log(JSON.stringify(user)); // 제이슨임.(문자열)
// stringify는 문자열로 만드는거고(제이슨),
// parse는 추출하는거니까 객체로 다시 만드는거임(제이슨(문자열)->다시객체로)
const result = JSON.stringify(user);
const resultUser = JSON.parse(result);
console.log(resultUser);
console.log(resultUser.name);

// 보낼때는 제이슨으로 보내고, 받을때는 제이슨일테니까 파스를 쓰는거임
// 당연한거야!
