// fonksiyon tanımlama

function merhaba(name = "bilgi yok" , age = "bilgi yok"){
    console.log(`İsim: ${name} Yaş: ${age}`)
}

merhaba("ahmet" , "16")
merhaba ("mehmet" , "63")
merhaba()
merhaba("ahmet")


//return - functon sonlandırma olarak kullanılır

function square(x){
    return x*x
// returnden sonraki fonksiyonlar yok sayılır
    console.log ("merhaba")
}
function cube(x){
    return x*x*x
}
// a eşittir 12nin karesini al karesinin küpünü al
let a = cube(square(12))
console.log(a)

const hello = function(namee){
    console.log("merhaba " + namee)
};
hello("Ahmet")

// Immediately Invoked Function Expression (IIFE)

// (function(isim){
//     console.log("İsim: " + isim)
// })("ahmet");

const database = {
    host: "localhost",

    add: function(){
        console.log("eklendi")
    },
    get: function(){
        console.log("elde edildi")
    },
    update: function(id){
        console.log(`Id: ${id} güncellendi`)
    },
    delete: function(id){
        console.log(`Id: ${id} silindi`)

    }
}

console.log(database.host)
database.add()

database.delete(10);