class person { // super class - base class
    constructor(name,age){
        this.age = age
        this.name = name
    }
    showInfos() {
        console.log("isim: " + this.name + " Yaş: " + this.age )
        }
   
}

class emplooye extends person { // DerivedClass, Subclass,ChildClass
    constructor (name,age,salary){
        // this.name = name
        // this.age = age
        super(name,age);
        this.salary = salary
    }
    showInfos() {
        console.log("isim: " + this.name + "age" + this.age + "Maas" + this.salary)
        }
    
}

const emp = new emplooye ("ahmet",22,4444);
// console.log(emp)
emp.showInfos()

