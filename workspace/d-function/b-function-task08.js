// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

const checkFirstEven = (start, end, callback) => {
    let target = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            target = i;
            break;
        }
    }

    if (callback) {
        return callback(target);
    }

    return target;
};

let condition = checkFirstEven(13, 50, (target) => target >= 10);
console.log(condition);

// const checkFirstEven = (start, callback) => {
//     let target = start + (start % 2 != 0 && 1);
//     if (callback) {
//         return callback(target);
//     }

//     return target;
// };

// let condition = checkFirstEven(14, (target) => target >= 10);
// console.log(condition);
