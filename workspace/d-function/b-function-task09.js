// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true

const getResult = (number1, number2, callback1) => {
    let minusResult = number1 - number2;
    let multiResult = number1 * number2;
    if (callback1) {
        return callback1(minusResult >= 5 && multiResult >= 50);
    }
    return minusResult >= 5 && multiResult >= 50;
};

getResult(10, 5, (result) => {
    console.log(result);
});
// 위에가 내가한거
const isGreaterEqaulsThan5 = (result) => result >= 5;
const isGreaterEqaulsThan50 = (result) => result > 50;

const subtract = (number1, number2) => {
    return number1 - number2;
};

const multiply = (number1, number2) => {
    return number1 * number2;
};

const check = (number1, number2, callback) => {
    let condition =
        isGreaterEqaulsThan5(subtract(number1, number2)) &&
        isGreaterEqaulsThan50(multiply(number1, number2));

    if (callback) {
        callback(condition);
    }

    return condition;
};

check(20, 6, console.log);
