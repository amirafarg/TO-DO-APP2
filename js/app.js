const ul = document.getElementById("taskList");
// const list = document.querySelector(".sign");
const input = document.querySelector(".squer-js");
const addForm = document.getElementById("add-form");
const allBtn = document.querySelector(".btn-all");
const toDoBtn = document.querySelector(".btn-to-do");
const doneBtn = document.querySelector(".btn-done");
let listItems = document.querySelectorAll("#taskList li");

ul.addEventListener('click', checkList);
addForm.addEventListener('submit', addNewTask);
allBtn.addEventListener('click', allFunction);
toDoBtn.addEventListener('click', toDoFunction);
doneBtn.addEventListener('click', doneFunctin);


function checkList(event) {
    console.log(event.target.nodeName);

    if (event.target.nodeName === 'LI') {
        event.target.classList.toggle("checked");
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
    listItems = document.querySelectorAll("#taskList li");
    console.log(listItems);

    addForm.reset();
}

function allFunction() {
    for (let list of listItems) {
        list.classList.remove('hidden');
    }

    toDoBtn.classList.remove('active');
    allBtn.classList.add('active');
    doneBtn.classList.remove('active');
}

function toDoFunction() {
    for (let list of listItems) {
        if (list.classList.contains('checked')) {
            list.classList.add('hidden');

        } else {
            list.classList.remove('hidden');
        };
    }

    toDoBtn.classList.add('active');
    allBtn.classList.remove('active');
    doneBtn.classList.remove('active');
}

function doneFunctin() {
    for (let list of listItems) {
        if (list.classList.contains('checked')) {
            list.classList.remove('hidden');
        }
        else {
            list.classList.add('hidden');
        }
    }

    toDoBtn.classList.remove('active');
    allBtn.classList.remove('active');
    doneBtn.classList.add('active');
}