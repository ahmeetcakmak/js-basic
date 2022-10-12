const programmer = {
    name : "Ahmet Cakmak",
     age : 24,
    
    email : "ahmetcakmakedu@gmail.com",
    langs : ["python" , "java" , "javascript"],

    adress : {
        city : "hatay" ,
        street : "ocakli"
    },

    work : function(){
        console.log("programcı çalışıyor..");
    }


}

value = programmer;

value = programmer.email 


value = programmer.langs

value = programmer.adress.city


programmer.work();

console.log(value)