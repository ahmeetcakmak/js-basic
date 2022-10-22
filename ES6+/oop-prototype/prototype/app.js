
function Emplooye(name,age) {
    
    this.name = name
    this.age = age;
    this.showInfos = function(){
        console.log("bilgiler gösteriliyor")
    }
    this.toString = function (){
        console.log()
    }
}

const emp1 = new Emplooye("ahmet",22);
console.log(emp1);

console.log(emp1.toString())