class Employee {
    id: number
    add: Address
    private _name!: string
    name: String

    constructor(id: number, add: Address, name: string) {
        this.id = id
        this.add = add
        this.name = name
    }

    getNameAndAdd(): String {
        return `${this.name} at ${this.add.City} City, ${this.add.Street} Street, ${this.add.place} Place`
    }

}

type emp<T> = T[]

let emp_array: emp<Employee> = []

let emp1 = new Employee(12, {City: 'HN', Street: 'LE THANH NGHI', place: 54}, 'NHL')
emp_array.push(emp1)

// let emp2 = new Employee(2213, 'BG', 'NGR')
// emp_array.push(emp2)

class Manager extends Employee {
    constructor(id: number, add: Address, name: string) {
        super(id, add, name)
    }
}

// let emp3 = new Manager(213, 'HCM', 'SEN')
// emp_array.push(emp3)

for (let i in emp_array) {
    console.log(emp_array[i])
    console.log(emp_array[i].getNameAndAdd())
}
