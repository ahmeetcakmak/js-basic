function Translate (word,language){
    this.apikey = "60bbc70f8dmsh00822fcd51c15dep1e3739jsn93e8888863b2"
    this.word =word;
    this.language = language;
    // xhr

    this.xhr = new XMLHttpRequest()
}
Translate.prototype.translateWord = function() {
const endpoint = `https://jive.p.rapidapi.com/jive`

this.xhr.open("GET",endpoint);
this.xhr.onload = () => {
    if (this.xhr.status === 200){
        console.log(this.xhr.responseText);
    }
    else {console.log("hata")}
}
this.xhr.send()
}