// Ajax,callback , http request

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
;
// Get request

get (url,callback) {
    this.xhr.open("GET",url)

        

    this.xhr.onload = ()=> {
    
        
        if (this.xhr.status === 200){
            callback(null,this.xhr.responseText)
        }
        else{
callback("herhangi bir hata olustu",null)
        }
    }

     
    this.xhr.send();
 }
post(url,data,callback){
    this.xhr.open("POST",url);

    this.xhr.setRequestHeader("Content-type","application/json");
    this.xhr.onload = () => {
        if(this.xhr.status === 201){
            // Başarılı
            callback(null,this.xhr.responseText)
        }
        else{
            callback("hata",null)
        }
    }

this.xhr.send(JSON.stringify(data))
}


}

const request = new Request();

// const albums = request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//   if(err === null){
//     console.log(response)
//   } 
//   else {
//     console.log(err)
//   }



// });


// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//   if(err === null){
//     console.log(response)
//   } 
//   else {
//     console.log(err)
//   }



// });



request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"ahmet"},function(err,albu){

if(err === null){
console.log(albu)
}
else {
    console.log(err)
}

})


