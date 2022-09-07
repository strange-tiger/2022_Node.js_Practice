// Same with 2_1_7_3_2
// 프로미스 사용
function findAndSaveUser(Users) {
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => {
        return Users.findOne({ gender: 'm' });
    })
    .then((user) => {
        // 생략
    })
    .catch(err => {
        console.error(err);
    });
}