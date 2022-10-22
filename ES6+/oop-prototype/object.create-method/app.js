// const obj = {
//     test1:function (){
//         console.log("test1")
//     },

//     test2:function () {
//         console.log("test2")
//     }

// }
// console.log(obj)

// const emp = Object.create(obj)
// emp.name = "mustafa";
// emp.age = 25;
// console.log(emp)


function Person(x){

}
Person.prototype.test1 = function(){
    console.log("test1")
};

Person.prototype.test2 = function(){
    console.log("test2")
}

function emplooye(name,age){
    this.name = name;
    this.age = age;
}
emplooye.prototype = Object.create(Person.prototype)

const emp = new emplooye("ahmet",23)
// emp.test1()
console.log(emp)
