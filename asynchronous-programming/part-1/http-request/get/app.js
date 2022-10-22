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





request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
  if(err === null){
    console.log(response)
  } 
  else {
    console.log(err)
  }



});

