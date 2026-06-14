// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 정확히 60점일 경우 합격, 아니면 불합격

// const average = (ko, en, ma, callback) => {
//     let average = (ko + en + ma) / 3;
//     let testResult = average === 60;
//     if (callback) {
//         return callback(testResult);
//     }
//     return testResult;
// };

// const getResult = average(100, 60, 70, (result) =>
//     result ? "합격" : "불합격"
// );
// console.log(getResult);

// ※ 무분별한 callback 사용은 지옥을 불러온다.
const getTotal = (kor, eng, math, callback1, callback2) => {
    let total = kor + eng + math;
    if (callback1) {
        return callback1(total, 3, callback2);
    }
    return total;
};

const getAverage = (total, count, callback) => {
    let average = Math.round(total / count);
    if (callback) {
        return callback(average);
    }

    return average;
};

const isEqaulTo60 = (average) => {
    return average === 60 ? "합격" : "불합격";
};

const message = getTotal(60, 30, 90, getAverage, isEqaulTo60);
console.log(message);

// const getAverage = (kor, eng, math, callback) => {
//     let total = kor + eng + math;
//     let average = total / 3;

//     if (callback) {
//         return callback(average);
//     }

//     return average;
// };

// const message2 = getAverage(100, 90, 80, (average) =>
//     average === 60 ? "합격" : "불합격"
// );
// console.log(message2);
