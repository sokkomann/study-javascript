// 상품 1개 가격과 총 가격을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴

// const quantityAndBool = (price, totalPrice, callback, callback2) => {
//     if (callback) {
//         callback(totalPrice / price);
//         callback2(callback);
//     }
//     return totalPrice / price;
// };

// // quantity(3000, 36000, console.log);

// const result = quantityAndBool(
//     3000,
//     36000,
//     (qt) => {
//         console.log(qt);
//     },
//     (result) => {
//         console.log(result <= 5);
//     }
// );
const getCount = (price, total, callback) => {
    let count = total / price;

    if (callback) {
        return callback(count);
    }

    return count;
};

const result = getCount(3000, 9000, (count) => {
    return count <= 5;
});

console.log(result);
