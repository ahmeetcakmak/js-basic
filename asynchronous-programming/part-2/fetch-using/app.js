function getTextFile(){

fetch("example.txt")
.then(response => response.text())
.then(data => console.log(data))
.catch(err => console.log(err))

}
// getTextFile();

function getJsonFile(){
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// getJsonFile();
function getExtarnalAPI(){
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
getExtarnalAPI();
