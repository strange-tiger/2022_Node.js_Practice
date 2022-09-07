const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

// then이나 catch에서 다시 다른 then이나 catch를 붙일 수 있다.
promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);       // 다음 then의 매개변수로 리턴 값을 넘긴다.
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);      // 다음 then의 매개변수로 리턴 값을 넘긴다.
        });
    })
    .then((message3) => {
        console.log(message3);      // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error);       // 3개의 promise 어디서든 실패(reject)하면 실행
    });