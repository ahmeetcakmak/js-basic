const person = {
    name: "Ahmet",
    age:25,
    salary:30000,
};


const langs = ["pyth","java","c++","php"]
const name = "ahmet";

// for in personun ıcındekı degerler eşittir prop

// for(let prop  in person){
//     // console.log(prop,person[prop])
// }

// ARRAY
// for (let index in langs){
//     console.log(index,langs[index])
// // }

// for (let index in person.name){
//     console.log(index,person.name[index])
// }

// OBJECT - for of ile objeler ustunde gezemeyiz 

// for (let value of person) {
//     console.log(value);
// }

for (let value of langs) {
    console.log(value)
}