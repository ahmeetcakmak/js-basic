const cardbody = document.querySelectorAll(".card-body")[1];
const title = document.querySelectorAll("#tasks-title")[1];


// //click event
// title.addEventListener("click" , run)
// // double clıck
// title.addEventListener("dbclick" , run)
// //mause down
// title.addEventListener("mousedown" , run)
// //mause up
// title.addEventListener("mouseup" , run)

// //mause over
// title.addEventListener("mouseover" , run)

// // mause out
// title.addEventListener("mouseout" , run)

// cardbody.addEventListener("mouseover" , run)
// cardbody.addEventListener("mouseout" , run)


// mause enter ve mause leave

cardbody.addEventListener("mouseenter" , run)
cardbody.addEventListener("mouseleave" , run)


function run(e){
    
    console.log(e.type)
}