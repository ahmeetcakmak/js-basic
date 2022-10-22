
// set timeout 

// setTimeout(function(){
//     console.log("stop")
// },2000)


// setInterval - 1 saniyede 1 tekrarla
let i = 0;
let value = setInterval(function(){
i++;
console.log(i)

},1000)

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
    


    
})

