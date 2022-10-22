class Emplooye {
    constructor(name,age,salary){
        this.name =name
        this.age = age
        this.salary = salary
    }

    showInfos() {
        console.log("isim: " + this.name + "age" + this.age + "Maas" + this.salary)
        }
};

const emp = new Emplooye("ahmet",24,5125)
console.log(emp)
