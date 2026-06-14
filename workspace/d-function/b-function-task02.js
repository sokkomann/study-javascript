// JS에서 false로 취급되는 값
// 0, "", null, undefined

// 두 정수의 덧셈, 결과 출력
const add = (number1, number2, callback) => {
    if (callback) {
        callback(number1 + number2);
    }
    return number1 + number2;
};

// const result = add(1, 3, console.log);

// JS에서 false로 취급되는 값
// 0, "", null, undefined

// 두 정수의 곱셈, 결과에 2를 곱해서 출력
const multiple = (num1, num2, callback) => {
    if (callback) {
        callback(num1 * num2 * 2);
    }
    return num1 * num2 * 2;
};

const ff = (num1, num2, callback) => {
    if (callback) {
        return callback(num1 * num2);
    }
    return callback(num1 * num2);
};
const resff = ff(3, 2, (result) => {
    return result * 2;
});
console.log(resff);

const result2 = multiple(7, 3, (result) => {
    console.log(result);
});
// const result3 = multiple(9, 3, console.log);
multiple(9, 3, console.log);

const multiply = (number1, number2, callback) => {
    if (callback) {
        // callback(number1 * number2);
        return callback(number1 * number2);
    }
    return number1 * number2;
};

// const result = multiply(5, 2);
// console.log(result);

multiply(5, 2, (result) => {
    console.log(result * 2);
});

const result = multiply(5, 2, (result) => {
    return result * 2;
});

console.log(result);
