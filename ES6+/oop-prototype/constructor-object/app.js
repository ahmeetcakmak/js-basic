// Yapıcı fonksiyon - Constructor

function Employe(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

this.showInfos = function(){
    console.log(this.name,this.age,this.salary);
}
}

const emp1 = new Employe("Ahmet",25,4000)
const emp2 = new Employe("mahmut",35,4000)

emp1.showInfos();
emp2.showInfos();
