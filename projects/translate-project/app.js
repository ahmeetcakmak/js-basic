
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord)
    // change

    document.getElementById("language").onchange = function(){
        //Arayüz işlemleri
    }
}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language".value))
function translateWord(e){



translate.translateWord()
    e.preventDefault();
}