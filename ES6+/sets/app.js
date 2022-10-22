// setler - kümerler

const myset = new Set();

myset.add(100)
myset.add(100)
myset.add(3.13)
myset.add("AHMET")
myset.add(true)
myset.add([1,2,3])
myset.add({a:1,b:2,c:3})

const myset2 = new Set ([100,3.13,"ahmet"])


// console.log(myset2)

// // delete metodu

// myset.delete("AHMET");
// console.log(myset)


// HAS METODU - İÇERİK ARAMA
console.log(myset.has("AHMET")) // TRUE
console.log(myset.has([1,2,3])) // FALSE 

// array olusturma
const array = Array.from(myset);

console.log(array)