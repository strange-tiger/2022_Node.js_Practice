// 객체의 속성을 같은 이름의 변수에 대입

// Old
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.statucs.count;
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// New
const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
const { getCandy, status: { count } } = candyMachine;