// elemeti idye göre secme

let element;

element = document.getElementById("todo-form");
element.document.getElementById("tasks-title");

// element classa göre secme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");


// element Tag'e göre seçme

element = document.getElementById("div")

// Query selector - css selector - tek bir element seçer

element = document.querySelector("#todo-form")
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");
element = document.querySelector("div");

//query selectorall - tüm elementleri seç
element = document.querySelectorAll(".list-group-item")

element.forEach(function(el){
    console.log(el)
});

console.log(element)
