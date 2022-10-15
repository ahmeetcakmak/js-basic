// tüm elementleri seçme
const fora = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners (){// Tüm event lisnerlar
    form.addEventListener("submit" , addTodo);
    document.addEventListener("DOMContentLoaded",LoadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo)
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos)


}
// tüm taskalrı temizleyin

function clearAllTodos(e){
    if (confirm("Silmek İstediginize Emin Misiniz ?")){
// Arayuzden todoları kaldırma
        todoList.innerHTML = ""; 
        localStorage.removeItem("todos");
        
    }
    
    
    
}



function filterTodos(e){

const filterValue = e.target.value.toLowerCase();
const listItems = document.querySelectorAll(".list-group-item")
listItems.forEach(function(listItem){
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1){

        listItem.setAttribute("style","display : none !important");
    }
    else{
        listItem.setAttribute("style","display : block ");
    }


})
}


// SİLME EVENTİ
function deleteTodo(e){

    if ( e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success" , "todo basarıyla silindi")
    }

    



}

function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo === deleteTodo){
            todos.splice(index,1);// Arraydan Değeri Silebiliriz
        }
    })

    localStorage.setItem("todos",JSON.stringify(todos))

}


function LoadAllTodosToUI(){
let todos = getTodosFromStorage();

todos.forEach(function(todo){
    addTodoToUI(todo);
})
}



function addTodo(e){
    const newTodo = todoInput.value.trim();

    if (newTodo === ""){


        
        showAlert("danger","lütfen bir todo girin");

    }
    else {
        addTodoToUI(newTodo)
        addTodotostorage(newTodo);
        showAlert("success" , "Başarılı bir sekilde eklendi")
    }


    

   

    e.preventDefault();
}
function getTodosFromStorage(){
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;


}
function addTodotostorage(newTodo){
   let todos = getTodosFromStorage();
   
   todos.push(newTodo);

   localStorage.setItem("todos" , JSON.stringify(todos))




}
function showAlert (type,message){
    const alert = document.createElement("div")

    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    console.log(alert)

    firstCardBody.appendChild(alert)
    
  // set-timeout
  setTimeout(function(){
   alert.remove ();
  },1000)

}
function addTodoToUI(newTodo){// string değerini list item olarak UI ya eklicek
// list item olusturma
const listItem = document.createElement("li");

//link oluşturma
const link = document.createElement("a");
link.href = "#";
link.className ="delete-item"
link.innerHTML = "<i class = 'fa fa-remove'></i>"

listItem.className = "list-group-item d-flex justify-content-between";

//text node ekleme

listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);

// // Todo Liste'e List Item ekleme
todoList.appendChild(listItem);
todoInput.value = "";


}