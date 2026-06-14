// 댓글 모듈 만들기(replyService)
// 작성, 목록, 수정, 삭제
// const replyService = (() => {
//     const write = (replyContent) => {};
//     // default 값은 항상 뒤로
//     const getList = (postId, callback, page = 1) => {
//         if (callback) {
//             return callback();
//         }
//     };

//     const update = (replyId, userId, userPw, replyContent) => {};

//     const remove = (replyId, userId, userPw) => {};

//     return { write: write, getList: getList, update: update, remove: remove };
// })();

const replyService = (() => {
    const write = (reply) => {};
    const getList = (postId, callback, page = 1) => {
        if (callback) {
            callback();
        }
    };
    const update = (reply) => {};
    const remove = (id) => {};

    return {
        write: write,
        getList: getList,
        update: update,
        remove: remove,
    };
})();
