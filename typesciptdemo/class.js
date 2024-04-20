"use strict";
class Employee {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get add() {
        return this._add;
    }
    set add(value) {
        this._add = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    constructor(id, add, name) {
        this.id = id;
        this.add = add;
        this.name = name;
    }
    getNameAndAdd() {
        return `${this.name} at ${this.add}`;
    }
}
let emp_array = [];
let emp1 = new Employee(12, 'HN', 'NHL');
emp_array.push(emp1);
let emp2 = new Employee(2213, 'BG', 'NGR');
emp_array.push(emp2);
for (let i in emp_array) {
    console.log(emp_array[i]);
}
console.log(emp_array[0].getNameAndAdd());
