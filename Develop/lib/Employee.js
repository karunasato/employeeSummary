// TODO: Write code to define and export the Employee class
// function fun(){
//     return {}
// }

// function Sofun(name, id){
//     this.name = name;
//     this.id = id;
// }

// const test = new Sofun();
// const test2 = fun();

// console.log(test2)
// console.log(test)

class Employee {
    constructor(name,id,email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

// const emp = new Employee("bob", "2", ".com");
// console.log(emp)
module.exports = Employee;
// console.log(emp.getName())