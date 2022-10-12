// while döngüleri

// let i = 0;

// while(i < 10) {

//     console.log(i);

//     i++;
// }

// let i = 10 ;

// while(i > 1) {

//     console.log(i);

//     i--;
// }

// let i = 0 ;

// while(i < 10) {

//     console.log(i);
// if (i == 5) {
//     break;
// }
//     i++;
// }

// let i = 0;

// while (i < 10){

//     if (i == 3 || i == 5){
//         i++
//         continue;
//     }
// }

// DO WHİLE

// let i = 0

// do {
//     console.log(i);
//     i++
// }while( i < 10);

 const langs = ["python" , "java" , "javascript"]
// let index = 0;

// while(index++ < langs.length){
//     console.log(langs[index++])

//     index++;
// }
// for (let index = 0; index < langs.length;index++){
//     console.log(langs[index])
//     index++
// }


// FOREACH

// langs.forEach(function(langss){
//     console.log(langss)
// })

// return

// const users = [
//     {name: "Ahmet", age: 25},
//     {name: "Ayşe", age: 35},
//     {name: "Aslı", age: 15},
// ];

// const names = users.map(function(user){
//     return user.name
// })
// const ages = users.map(function(user){
//     return user.age;
// })
// console.log(names)
// console.log (ages)

const  user = {
    name: "ahmet",
    age: 16

};
 for (let key in user){
    console.log(key,user[key])
 }
