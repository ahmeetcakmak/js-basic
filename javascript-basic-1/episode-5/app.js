let value;

const numbers = [43,56,24,63,12,62,,5]

const langs = ["python" , "java" , "c++" , "Javascript"];

const a = ["merhaba" , 22 , null , undefined , 3.14]

// eleman sayısı sayma
value = numbers.length


// number seçme
value = numbers[0];


// değerin kacıncı sırada olduğunu bulma
value = numbers.indexOf(56);

// arrayin sonuna değer ekleme
numbers.push(2000);

// arrayin başına değer ekleme
numbers.unshift(60);

// arrayin sonundan değer atma
numbers.pop();


//arrayin basından deger atma
numbers.shift();

// belli bir kısmı atma
numbers.splice(0,3);

// arrayi ters çevirme
numbers.reverse();


// kücükten büyüe sıralama
value = numbers.sort(function(x,y){
    return x - y ;
})
// büyükten kucuge sıralama
value = numbers.sort(function(x,y){
    return y- x ;
})