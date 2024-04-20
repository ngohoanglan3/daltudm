class Employee {
    id!: number
    add!: string
    name!: string

    constructor(id: number, add: string, name: string) {
        this.id = id
        this.add = add
        this.name = name
    }

}

type emp<T> = T[]

let emp_array: emp<Employee> = []

let emp1:Employee = {id: 12, add: 'HN', name: 'NHL'}
emp_array.push(emp1)

let emp2:Employee = {id:2213, add: 'BG', name: 'NGR'}
emp_array.push(emp2)
for(let i in emp_array) {
    console.log(emp_array[i])
}