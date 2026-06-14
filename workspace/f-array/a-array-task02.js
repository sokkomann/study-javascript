// 1 ~ 10까지 담은 후 각 값의 제곱을 출력한다.
const datas = new Array(10).fill(10);

datas.forEach((_, i) => {
    datas[i] = i + 1;
});

datas.forEach((data) => {
    console.log(data * data);
});
