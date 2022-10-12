const name = "Ahmet CAKMAK";
const department = "Bilisim";
const salary  = 4000;


// const a = "isim: " + name +"\n" + "Departman: " + department + "\n" + "Maaş: " + salary; 

// const a = `isim: ${name}\ndepartment: ${department}\n maas: ${salary}`

// const html = "<ul>" +
//             "<li>" + name + "</li>"
//             "<li>" + department + "</li>"
//             "<li>" + salary + "</li>"
//             "</ul>";
//             document.body.innerHTML = html;

function a (){
    return "merhaba"
}

// tek tek + işlemi ile ugrasmamak için kolaylık sağlar
const html = `
<ul>
<li> ${name} </li>
<li>${department}  </li>
<li> ${salary} </li>
<li> ${4/10} </li>
<li> ${a()}</li>
`
document.body.innerHTML = html
console.log(a)