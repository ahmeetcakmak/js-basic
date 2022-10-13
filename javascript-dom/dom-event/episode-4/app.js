const filter = document.getElementById("filter");


// focus
filter.addEventListener("focus" , run);
//blur
filter.addEventListener("blur" , run);
//copy
filter.addEventListener("copy" , run);
//paste
filter.addEventListener("paste" , run);
//cut
filter.addEventListener("cut" , run);
//select seçtigimizde
filter.addEventListener("select" , run);

function run(e){
    console.log(e.type)
}