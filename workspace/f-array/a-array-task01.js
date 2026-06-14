// 1 ~ 10 까지 중 2의 배수만 Array 객체에 담기
const datas = new Array(5).fill(0);

datas.forEach((_, i) => {
    datas[i] = (i + 1) * 2;
});
console.log(datas);
