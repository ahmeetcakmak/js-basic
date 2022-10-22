function Person (name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log("isim: " + this.name +" "+ "yaş: " + this.age)
}

// const person = new Person ("ahmet" ,16)
// console.log(person)

function Employee (name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.toString = function(){
    console.log("Employee")
}
const emp = new Employee ("ahmet",16,90000)

// console.log(emp)

// emp.showInfos()
emp.toString()