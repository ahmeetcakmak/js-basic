// local storage

// set item

 localStorage.setItem("hareket" , "burpee")
localStorage.setItem("tekrar" ,50)

// get item

// const value = localStorage.getItem("tekrar");
// console.log(value)
// console.log(typeof value)

// clear local storage

// localStorage.setItem("hareket" , "burpee")
// localStorage.setItem("tekrar" , 50)

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("tekrar") === null){
//     console.log("item bulunamadı")
// }
// else {
//     console.log("item bulundu")
// }

// const todos = ["todo 1" , "todo 2" , "todo 3"];

// // localStorage.setItem("todos", JSON.stringify(todos))
// const value = JSON.parse(localStorage.getItem("todos")
// )
// console.log(value)


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit", addTodo)

function addTodo(e){
    const value = todoInput.value;

    let todos;

    if  (localStorage.getItem("todos") === null){
        todos =  []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(value);

    localStorage.setItem("todos" , JSON.stringify(todos))


    e.preventDefault();
}