// karşılaştırma Operatörlerli

// ==
// ===
// !=
// !==
// >
// <
// >==
// <==


// değer eşitmidir değere
console.log(2==2);
console.log("js" == "javascript" )
// number ile string yazılırsa otomatik olarak stringe cevirir
console.log(2 == "2") // yanlıs kullanım
console.log(2 === "2"); // doğru kullanım

// büyükmüdür 

console.log(4 > 2);
console.log(2 > 4);

//  eşit değil mi?
console.log(2 != 2)

// küçüktür
console.log(2 < 4);
console.log(4 < 2)

// büyük eşit
console.log(2 >= 2)
console.log(5 >= 2)

// küçük eşit
console.log(2 <= 4)
console.log(2 <= 2)

// mantıksal bağlac

//not operatoru
console.log(!(2 != 2));

// and öperatoru iki tarafta dogru olursa true 1 taraf yanlıs 1 taraf true olursa false

console.log((2 == 2) && ("ahmet" == "ahmet"))

// or operatörü matematikteki veyaya denk 1 tane doğru true olması için yeterlidir.

console.log((4 == 2));

// if (kosul){
//     //if block
// }

const error = true;
// koşul sağlanırsa çalıştır
if (error == true){
    console.log("Hata oluştu")
}
// koşullar sağlanmaz ise çalıştır
else {
    console.log ("hata olusmadı")
}

const process = "12" ;
if (process === "1"){
    console.log("İşlem 1")
}
// if kosulu saglanmaz ise
else if (process === "2") {
    console.log("İşlem2")
}
else if (process === "3") {
    console.log("İşlem2")
}
else if (process === "4") {
    console.log("İşlem2")
}
// hiçbir kosul saglanmaz ise
else {
    console.log("Geçersiz işlem")
}


// ternary operator
const number = 1002
if (number === 100){
    console.log ("Sayı 100'e esit")
}
else {
    console.log("sayı 100'e esıt degıl")
};
//  kosul bu mu bu ise sunu yap degil ise bunu yap
console.log(number === 100 ? "sayı 100" : "sayı 100 degıl")

