"use strict";
class Employee {
    constructor(id, add, name) {
        this.id = id;
        this.add = add;
        this.name = name;
    }
}
let emp_array = [];
let emp1 = { id: 12, add: 'HN', name: 'NHL' };
emp_array.push(emp1);
let emp2 = { id: 2213, add: 'BG', name: 'NGR' };
emp_array.push(emp2);
for (let i in emp_array) {
    console.log(emp_array[i]);
}
