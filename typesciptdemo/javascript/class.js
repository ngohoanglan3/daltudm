"use strict";
class Employee {
    constructor(id, add, name) {
        this.id = id;
        this.add = add;
        this.name = name;
    }
    getNameAndAdd() {
        return `${this.name} at ${this.add.City} City, ${this.add.Street} Street, ${this.add.place} Place`;
    }
}
let emp_array = [];
let emp1 = new Employee(12, { City: 'HN', Street: 'LE THANH NGHI', place: 54 }, 'NHL');
emp_array.push(emp1);
// let emp2 = new Employee(2213, 'BG', 'NGR')
// emp_array.push(emp2)
class Manager extends Employee {
    constructor(id, add, name) {
        super(id, add, name);
    }
}
// let emp3 = new Manager(213, 'HCM', 'SEN')
// emp_array.push(emp3)
for (let i in emp_array) {
    console.log(emp_array[i]);
    console.log(emp_array[i].getNameAndAdd());
}
