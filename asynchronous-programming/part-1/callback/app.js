// function process1 (callback){
//     setTimeout(function(){
//         console.log("prces1")
//         callback();
//     },3000);

// }

// function process2(){
//     setTimeout(function(){
//         console.log("proces2")
//     },4000)
// }

// process1(process2)





const langs = ["python","java","css"]

function addLang(lang,callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("eklendi")
        callback();

    },2000)
}
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang) {
            console.log(lang)
        })
    },1000)
}

addLang("javacript",getAllLangs)