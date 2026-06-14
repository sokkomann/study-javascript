function add(number1, number2) {
    return number1 + number2;
}

let plus = add;

const result = plus(1, 3);
console.log(result);

const add = (number1, number2) => {
    return number1 + number2;
};

console.log(add(3, 5));

const printInfo = (age, address, name = "익명") => {
    console.log(age, address, name);
};

printInfo(20, "경기도", "한동석");
printInfo(100, "서울");
