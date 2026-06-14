// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총 마리 수를 각각 비교해 가축 중 수가 적은 쪽의 동물 이름을 리턴
// 두 수는 절대 같지 않다.

// const result = (cow, pig, callback) => {
//     let result = null;
//     if (cow >= pig) {
//         result = "돼지";
//     } else {
//         result = "소";
//     }
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// result(6, 8, console.log);

// const get = result(5, 2, (result) => {
//     console.log(result);
// });

const compareCowWithPig = (cowCount, pigCount, callback) => {
    let result = cowCount > pigCount;
    if (callback) {
        return callback(result);
    }
    return result;
};

const resultName = compareCowWithPig(100, 400, (result) =>
    result ? "돼지" : "소"
);
console.log(resultName);
