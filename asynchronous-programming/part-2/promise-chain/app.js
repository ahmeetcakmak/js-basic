// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){

//             if(typeof data === "string"){
//                 // olumlu
//                 resolve(data);
//             }
//             else {
//                 //olumsuz
//                 reject(new Error("lütfen string bir deger girin"))
//            }
            
//         },5000)

//     })

// }

// getData(24)
// .then(response => console.log("gelen deger: " + response))
// .catch(err => console.error(err))

function addTwo(number){

    return new Promise( (resolve,reject ) => {
setTimeout(function(){
    if(typeof number === "number"){
        resolve(number+2)

    }
    else {
        reject(new Error("lütfen bir sayı girin"))
    }
},3000)
    
    });
}

addTwo(25e5)
.then(response => {
    console.log(response)
    return response+2
}).then(response2 => 
    console.log(response2)
    
)
.catch(err => console.log(err))


