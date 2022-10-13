let value;

const todolist = document.querySelector(".list-group")
const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardrow = document.querySelector(".card-row")

value = todolist;
value = todo;
value = cardrow;

// child nodes
value = todolist.childNodes;
value = todolist.childNodes[0];

//Childeren - element

value = todolist.children;
value = todolist.children[todolist.children.length - 1];
value = todolist.children[2].textContent = "değişti";

// cocuklar arası geçiş
value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Torunu degıstık :D";

// ilk ve son cocugu bulma
value = todolist.firstElementChild;
value = todolist.lastElementChild;

// çocuk sayısı öğrenme
value = todolist.childElementCount;


// anneisni öğrenme
value = cardrow;
value = cardrow.parentElement;
// ÜSTÜN ÜSTÜNÜ ALMA
value = cardrow.parentElement.parentElement;

// element kardeşi bulma bir öncekine git
value = todo;
value = todo.previousElementSibling;
// element kardeşi bulma bir sonrakine git

value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;



console.log(value)