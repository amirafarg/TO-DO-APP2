const ul = document.getElementById("taskList");
const list = document.querySelector(".sign");
const input = document.querySelector(".squer-js");
const addForm = document.getElementById("add-form");
const allBtn =document.querySelector(".btn-all");
const toDoBtn =document.querySelector(".btn-to-do");
const doneBtn =document.querySelector(".btn-done");

ul.addEventListener('click', checkList);
addForm.addEventListener('submit', addNewTask);
allBtn.addEventListener('click', allFunction);
toDoBtn.addEventListener('click', toDoFunction);
doneBtn.addEventListener('click', doneFunctin);


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
        <span>${addForm.task.value}</span>

        <button class="delete-btn">✕</button>
    `;

    ul.appendChild(list);

    addForm.reset();
}

function allFunction() {

}

function toDoFunction() {
    for(let item of listItems) {
        if (item.classList.contains('checked'));

    }
}

function doneFunctin() {

}