let rootele = document.getElementById("rootcont");
let texte1 = document.getElementById("boldtext")

let todoarr = []


function setfunctione1(ischeck,titleid) {
    let usetitleid = document.getElementById(titleid);

    if( ischeck ) {
        usetitleid.style.textDecoration = "line - through";
    }
    else {
        usetitleid.style.textDecoration = "none";
    }
}




function todofunction(todo) {

    let idgenrate = "checkbox" + todo.id;
    let titleid = "title" + todo.id;

    let listiteam = document.createElement("li");
    listiteam.classList.add("list-cont")
    rootele.appendChild(listiteam);

    let checkboxE1 = document.createElement("input");
    // checkboxE1.id = idgenrate;
    checkboxE1.type = "checkbox";
    
    listiteam.appendChild(checkboxE1);

    let lebalE1 = document.createElement("label");
    lebalE1.classList.add("lebal-cont", "shadow")
    lebalE1.htmlFor = idgenrate;

    listiteam.appendChild(lebalE1);

    let titleE1 = document.createElement("h4");
    titleE1.id = titleid;
    titleE1.textContent = todo; // this is the minor problem
    lebalE1.appendChild(titleE1);

    let delbtnE1 = document.createElement("button");
    delbtnE1.classList.add("del-btn")
    lebalE1.appendChild(delbtnE1)

    let iconE1 = document.createElement("i");
    iconE1.classList.add("fa-solid", "fa-trash")
    delbtnE1.appendChild(iconE1)
}

for (todo of todoarr) {

    todofunction(todo)

}

function todoadd() {
    let todoInput = document.getElementById("input-box");
    let temprary = todoInput.value;



    todoInput.value = "";

    if (temprary === "") {
        texte1.textContent = "please provide the valid input";
        texte1.style.color = "red";

    }
    else {
        todofunction(temprary);
        texte1.textContent = "";

    }
}