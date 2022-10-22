// Call,Appply,Bind

const obj1 = {
    number1: 10,
    number2: 20,
}

const obj2 = {
    number1: 50,
    number2: 30,
}

function addnumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4)
}

// addnumbers.call(obj1,10,200)
// addnumbers.call(obj2,10,200)


// apply

// addnumbers.apply(obj1,[100,200]),

// bind

function getnumberstotal (number3,number4) {
    return this.number1 + this.number2 + number3 +number4
}

const copyFunc1 =  getnumberstotal.bind(obj1);
const copyFunc2 =  getnumberstotal.bind(obj2);

console.log(copyFunc1(100,200))