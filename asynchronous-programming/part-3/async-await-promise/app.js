// async function test(data){
//     //Promise return new promise
//     //return data;

//     let promise = new Promise((resolve,reject)=> {
//         setTimeout(() => {
//             resolve("bu bir değerdir.");
//         },5000)
//     });
//     let response = await promise;
    
//     return response;


// }

// // test("merhaba").then(response => console.log(response))

// async function testData(data){

//     let promise = new Promise((resolve,rejecet)=>{
//         setTimeout(()=> {
//             if (typeof data === "string"){
//                 resolve(data);
//             }
//             else {
//                 rejecet(new Error("Lütfen string bir değer girin.."))
//             }
//         },2000)
//     })
// const response = await promise;
// return response;
// }

// testData("thriller")
// .then(data => console.log(data))
// .catch(err => console.log(err))


async function getCurrency(url){
    const response = await fetch(url);

    const data = await response.json();

    console.log(data)
}

getCurrency("https://api.coindesk.com/v1/bpi/currentprice.json")







