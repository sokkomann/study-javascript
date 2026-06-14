// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력

const full = (last, first, callback) => {
    if (callback) {
        return callback(last + first);
    }
    return last + first;
};

const result = full("김", "민중", (result) => {
    return result + "님";
});

console.log(result);

full("문", "진우", (fullName) => {
    console.log(fullName + "님");
});

const getFullName = (firstName, lastName, callback) => {
    if (callback) {
        // callback(lastName + firstName);
        return callback(lastName + firstName);
    }

    return lastName + firstName;
};

getFullName("동석", "한", (fullName) => {
    console.log(fullName + "님");
});
const fullName = getFullName("동석", "한", (fullName) => {
    return fullName + "님";
});

console.log(fullName);
