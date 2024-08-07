const ul = document.getElementById("taskList");
const list = document.querySelector(".sign");
const input = document.querySelector(".squer-js");
const addForm = document.querySelector("#add-form");
const allBtn =document.querySelector(".btn-all");
const toDoBtn =document.querySelector(".btn-to-do");
const doneBtn =document.querySelector(".btn-done");

ul.addEventListener('click', checkList);
addForm.addEventListener('submit', addNewTask);
allBtn.addEventListener('click', allBtn);
toDoBtn.addEventListener('click', toDoBtn);
doneBtn.addEventListener('click', doneBtn);


function checkList(event) {
    console.log(event.target.nodeName);

    if (event.target.nodeName === 'LI') {
        event.target.classList.toggle("checked");
        input.target.classList.toggle("checked");
    }

    if (event.target.nodeName === 'BUTTON') {
        ul.removeChild(event.target.parentElement);
    }
}

function addNewTask(event) {
    event.preventDefault();

    if (addForm.task.value == '') {

        alert('cant be empety');

        return
    }

    const list = document.createElement('li');

    list.innerHTML = `
        <img class="squer" src="./img/input.svg" alt="">

        <span>${addForm.task.value}</span>

        <button class="btn-delet">✕</button>
    `;

    ul.appendChild(list);

    addForm.reset();
}

function allBtn() {

}

function toDoBtn() {
    for(let item of listItems) {
        if (item.classList.contains('checked'));

    }
}

function doneBtn() {

}