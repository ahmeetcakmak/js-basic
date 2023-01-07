class Request {
    get(a){ // get request

        return new Promise( (resolve,reject) =>{

            fetch(a)
            .then(b => b.json())
            .then(c => resolve(c))
            .catch(err => reject(err))

          })

        
        
    }
}
const request = new Request()
let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums =>{
    
console.log(albums);

})
.catch(err => console.log(err))


// console.log(albums); asenkron

