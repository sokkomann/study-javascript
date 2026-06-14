// 1 ~ n까지 합을 구한 뒤 5000이상이면 5000을 빼고 출력

const total = (number, callback) => {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum += i + 1;
    }
    if (callback) {
        return callback(sum);
    }
    return sum;
};

const result = total(99, (result) => {
    return result >= 5000 ? result - 5000 : result;
});
console.log(result);

// const count = (end, callback) => {
//     let total = 0;
//     for (let i = 0; i < end; i++) {
//         total += i + 1;
//     }

//     if (callback) {
//         return callback(total);
//     }

//     return total;
// };

// const result = count(10, (total) => {
//     return total - (total >= 5000 && 5000);
// });

// console.log(result);
