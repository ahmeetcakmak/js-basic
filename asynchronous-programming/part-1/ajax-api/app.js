
var myHeaders = new Headers();
myHeaders.append("apikey", "q10ZuVB0TxfX5524U3gQDPAVXNRkfIXP");



document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.apilayer.com/exchangerates_data/live?base=USD&symbols=EUR,GBP");


xhr.onload = function(){
    if (this.status){
        console.log(this.responseText)
    }
}
    xhr.send
}