class Employee {
    private _id!: number
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
    private _add!: string
    public get add(): string {
        return this._add
    }
    public set add(value: string) {
        this._add = value
    }
    private _name!: string
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }

    constructor(id: number, add: string, name: string) {
        this.id = id
        this.add = add
        this.name = name
    }

    getNameAndAdd(): String {
        return `${this.name} at ${this.add}`
    }

}

type emp<T> = T[]

let emp_array: emp<Employee> = []

let emp1 = new Employee(12, 'HN', 'NHL')
emp_array.push(emp1)

let emp2 = new Employee(2213, 'BG', 'NGR')
emp_array.push(emp2)
for (let i in emp_array) {
    console.log(emp_array[i])
}
console.log(emp_array[0].getNameAndAdd())