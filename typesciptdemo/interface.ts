interface Address {
    City: String
    Street: string
    place: number
}

interface User {
    name: string
    age: number
    id?: number
    email: string
}

interface Employees extends User {
    salary: number
}

let emp: Employees = {name: 'NGL', age: 12, email: 'fdve@fsd.com', salary: 12000}

let [user1, user2]:  User[] = [
    {name: 'IGL', age: 19, email: ''},
    {name: 'GLI', age: 19, email: ''},
    {name: 'DFA', age: 19, email: ''}
]

