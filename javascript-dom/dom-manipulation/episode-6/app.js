// replace

const cardbody = document.querySelectorAll(".card-body")[1];

const newelement = document.createElement("h3")

newelement.className = "card-title"
newelement.id = "tasks-title"
newelement.textContent = "Yemi todolar"

//eski  element

const oldelement = document.querySelector("#tasks-title")

// degistirme

cardbody.replaceChild(newelement,oldelement);

console.log(newelement)