// // module.exports = function test1(){
// //     console.log("test 1")
// // }

// // module.exports = function test2(){
// //     console.log("test 2")
// // }
// module.exports = {
//     name: "ahmet",
//     test1: function(){
//         console.log("test 1")
//     },
//     person: {
//         name: "mehmet",
//         mail: "ahmetcakmak.education@gmail.com"

//     }
// }


// ES6 MODULES

export const name = "ahmet";
export function test(){
    console.log("test fonksiyonu")
}
export class Person{
    static Test(){
        console.log("person test")
    }
}
export const employee = {
    name:"Ahmet",
    salary:"8"
}