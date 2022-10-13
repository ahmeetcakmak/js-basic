// dinamik element silme

const todolist = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");


// remove metodu - silme

todos[3].remove()

//remove child

// todolist.removeChild()

todolist.removeChild(todos[2])



 console.log(todos)
 console.log(todolist)