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
    };

     
    this.xhr.send();
 }
put(url,data,callback){
    this.xhr.open("PUT",url);

    this.xhr.setRequestHeader("Content-type","application/json");
    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            // Başarılı
            callback(null,this.xhr.responseText)
        }
        else{
            callback("hata",null)
        }
    }

this.xhr.send(JSON.stringify(data))
}
del (url,callback) {
    this.xhr.open("DELETE",url)

        

    this.xhr.onload = ()=> {
    
        
        if (this.xhr.status === 200){
            callback(null,this.xhr.responseText)
        }
        else{
callback("herhangi bir hata olustu",null)
        }
    };

     
    this.xhr.send();
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



// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:23,title:"ahmet"},function(err,albu){

// if(err === null){
// console.log(albu)
// }
// else {
//     console.log(err)
// }

// })



 request.del("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
  if(err === null){
    console.log(response)
  } 
  else {
    console.log(err)
  }



});
