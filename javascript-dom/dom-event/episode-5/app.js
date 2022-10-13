// bubbling


// document.querySelector(".container").addEventListener("click",function(){
//     console.log("div container")
// })
// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("card row")
// })
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("card body")
// })



// event capturing olay yakalama

const cardbody = document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click" , run)


function run(e){
    if (e.target.className === "fa fa-remove"){
        console.log("silme işlemi")
    }
    if (e.target.id === "filter"){
        console.log("Filtreleme İşlemi")
    }
    if (e.target.id === "clear-todos"){
        console.log("tüm taskları silme işlemi")
    }
}