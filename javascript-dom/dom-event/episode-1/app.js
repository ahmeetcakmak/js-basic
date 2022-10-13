const filterintput = document.getElementById("filter")
const todoform = document.getElementById("todo-form")


// var olan eventi gösterme
filterintput.addEventListener("focus" , function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
    
})

// event olusturma -- todoform submit oldugunda submitform yap
todoform.addEventListener("submit" , submitForm)

function submitForm(e){
    console.log("submit eventi")
}