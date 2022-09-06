// 배열에 대한 구조분해 할당
// 배열 array의 첫 번째, 두 번째 요소와 네 번째 요소를 변수에 대입

// Old
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

// New
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array; 