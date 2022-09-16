var p1 = new Promise((success, fail) => {
    setTimeout(() => {
        console.log(1)
        success();
    }, 2000)
});
console.log(2);
var p2 = new Promise((success, fail) => {
    setTimeout(() => {
        console.log(3);
        success();
    }, 1000)
});
var p3 = Promise.all([p1, p2]).then(() => new Promise((success, fail) => {
    setTimeout(() => {
        console.log(4);
        success();
    }, 3000)
})); 
p3.then(() => console.log(5));