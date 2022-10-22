// http status
// 200 : ok
// 403 : Forbiden
// 404 : not found
// Internal server error

document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();
    
    xhr.onload = function(){
        if (this.status === 200){
            console.log(this.responseText)
        }
    }

xhr.open("GET","ornek.txt")
xhr.send()
})