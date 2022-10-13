// klavye eventleri - event atamak icin addeventlistener kullanılır
const header = document.querySelector(".card-header");
const todoinput = document.querySelector("#todo")

todoinput.addEventListener("keyup" , changeText)

function changeText(e){
    header.textContent = e.target.value
}
// //keypress
// document.addEventListener("keypress" , run)
// function run (e){
//     // console.log(e.which)
//     console.log(e.key)
// }

//keydown 

//  document.addEventListener("keydown" , run)
// function run (e){
//     // console.log(e.which)
//     console.log(e.key)
//}

//keyup - bastıktan sonra

// document.addEventListener("keyup" , run)
// function run (e){
//     // console.log(e.which)
//     console.log(e.key) }