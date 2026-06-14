// 두 정수를 전달받고 두 수를 곱한다.
// 이 때, 만약 apply라는 매개변수가 true라면 결과값에서 10을 뺀다.
// apply는 기본값이 false이다.

const multiple = (number1, number2, apply = false) => {
    if (apply) {
        return number1 * number2 - 10;
    }
    return number1 * number2;
};

// const result = multiple(5, 6, true);
// console.log(result);
// const result2 = multiple(2, 9);
// console.log(result2);

const multiply = (number1, number2, apply = false) => {
    // return number1 * number2 - (apply ? 10 : 0);
    return number1 * number2 - (apply && 10);
};

const result = multiply(2, 5);
console.log(result);

const fx = (x, y, callback) => {
    if (callback) {
        callback(x * y * 2);
    }
    return x * y * 2;
};

const myresult = fx(7, 2, (result) => {
    console.log(result);
});

const myresult2 = fx(3, 8, console.log);
