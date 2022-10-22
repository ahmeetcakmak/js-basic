// // maplar - key (anahtar) - value(değer)

// let myMap = new Map(); // olusturma

// const key1 = "ahmet"
// const key2 = {a:10,b:20}
// const key3 = () => 2;

// //set 

// myMap.set(key1,"string deger");
// myMap.set(key2,"object literal deger");
// myMap.set(key3,"function deger");



// // get
// console.log(myMap.get(key1))
// console.log(myMap.get(key2))
// console.log(myMap.get(key3))

// console.log(myMap)

// map boyutu 

// console.log(myMap.size);






// const cities = new Map();

// cities.set("İstanbul",14)
// cities.set("ankara",6)
// cities.set("izmir",4)

// for each

// cities.forEach(function(value,key){
//     console.log(key,value)
// })

//for of

// for (let [key,value] of cities){
//     console.log(key,value)
// }

// map keys

// for (let key of cities.keys()){
//     console.log(key)
// }



// for (let value of cities.values()){
//     console.log(value)
// }



const cities = new Map();

cities.set("İstanbul",14)
cities.set("ankara",6)
cities.set("izmir",4)

const array = Array.from(cities)

console.log(...array)

