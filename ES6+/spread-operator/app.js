// // spread operator

// const langs = ["pyth" , "java","css","C++"]

// // console.log(langs[0],langs[1],langs[2],langs[3],)


// const langs2 = ["javascript","php", ...langs]

// console.log(...langs2)







// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...number2] = numbers;

// console.log(a,b,)
// console.log(...number2)







const addNumbers = (a,b,c)=> console.log(a+b+c)
const numbers = [100,20,300]
addNumbers(...numbers)
