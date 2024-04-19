"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 2, 3));
const sub = (num1, num2, num3) => num3 ? num1 - num2 : -num1 - num2;
console.log(sub(10, 20));
const multiply = (num1, num2, ...num3) => {
    return num3 ? num1 * num2 * num3.reduce((a, b) => a + b, 0) : num1 * num2;
};
let a = [1, 2, 3, 4, 5];
console.log(multiply(1, 2, ...a));
function getItems(items) {
    return new Array().concat(items);
}
// Sử dụng generic function
function identity(arg) {
    return arg;
}
let result = identity("Hello"); // Kiểu của result là string
// Sử dụng tham số kiểu any
function identityAny(arg) {
    return arg;
}
let resultAny = identityAny("Hello"); // Kiểu của resultAny cũng là string, nhưng không được kiểm tra bởi TypeScript
