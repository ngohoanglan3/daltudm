function add(num1: any, num2: any, num3?: any) {
    return num3 ? num1 + num2 + num3 : num1 + num2
}

console.log(add(1, 2, 3))

const sub = (num1: number, num2: number, num3?: number): number => num3 ? num1 - num2 :  - num1 - num2

console.log(sub(10, 20))

const multiply = (num1: number, num2: number, ...num3: number[]): number => {
    return num3 ? num1 * num2 * num3.reduce((a, b) => a + b, 0) : num1 * num2
}

let a : number[] = [1, 2, 3, 4, 5]
console.log(multiply(1, 2, ...a))

function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

// Sử dụng generic function
function identity<T>(arg: T): T {
    return arg;
}

let result = identity<string>("Hello"); // Kiểu của result là string

// Sử dụng tham số kiểu any
function identityAny(arg: any): any {
    return arg;
}

let resultAny = identityAny("Hello"); // Kiểu của resultAny cũng là string, nhưng không được kiểm tra bởi TypeScript
