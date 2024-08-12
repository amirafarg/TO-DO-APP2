const ul = document.getElementById("taskList");
const addForm = document.getElementById("add-form");
const allBtn = document.querySelector(".btn-all");
const toDoBtn = document.querySelector(".btn-to-do");
const doneBtn = document.querySelector(".btn-done");
let listItems = document.querySelectorAll("#taskList li");
const allBtnCounters = document.querySelector("#all-cont .num");
const doneBtnCounters = document.querySelector("#done-cont .num");
const toDoBtnCounters = document.querySelector("#to-do-cont .num ");

ul.addEventListener('click', checkList);
addForm.addEventListener('submit', addNewTask);
allBtn.addEventListener('click', allFunction);
toDoBtn.addEventListener('click', toDoFunction);
doneBtn.addEventListener('click', doneFunctin);

function checkList(event) {
    console.log(event.target.nodeName);

    if (event.target.nodeName === 'LI') {
        event.target.classList.toggle("checked");
        filterBtnsCount();
    }

    if (!allBtn.classList.contains('active')) {
        setTimeout(() => {
            event.target.classList.add('hidden');
        }, 200);
    }

    if (event.target.nodeName === 'BUTTON') {
        ul.removeChild(event.target.parentElement);
        filterBtnsCount();
    }
}

function addNewTask(event) {
    event.preventDefault();

    if (addForm.task.value == '') {

        alert('cant be empety');

        return
    }

    const item = document.createElement('li');

    item.innerHTML = `
        <span>${addForm.task.value}</span>

        <button class="delete-btn">✕</button>
    `;

    ul.appendChild(item);
    listItems = document.querySelectorAll("#taskList li");

    if (doneBtn.classList.contains('active')) {
        item.classList.add('hidden');
    }

    addForm.reset();
    filterBtnsCount();
}

function allFunction() {
    for (let item of listItems) {
        item.classList.remove('hidden');
    }

    toDoBtn.classList.remove('active');
    allBtn.classList.add('active');
    doneBtn.classList.remove('active');
}

function toDoFunction() {
    for (let item of listItems) {
        if (item.classList.contains('checked')) {
            item.classList.add('hidden');

        } else {
            item.classList.remove('hidden');
        };
    }

    toDoBtn.classList.add('active');
    allBtn.classList.remove('active');
    doneBtn.classList.remove('active');
}

function doneFunctin() {
    for (let item of listItems) {
        if (item.classList.contains('checked')) {
            item.classList.remove('hidden');
        }
        else {
            item.classList.add('hidden');
        }
    }

    toDoBtn.classList.remove('active');
    allBtn.classList.remove('active');
    doneBtn.classList.add('active');
}

function filterBtnsCount() {
    listItems = document.querySelectorAll("#taskList li");

    let allCount = listItems.length;
    let toDoCount = 0;
    let doneCount = 0;

    for (let item of listItems) {
        if (item.classList.contains('checked')) {
            doneCount++;
        } else {
            toDoCount++;
        }
    }

    allBtnCounters.textContent = `(${allCount})`;
    toDoBtnCounters.textContent = `(${toDoCount})`;
    doneBtnCounters.textContent = `(${doneCount})`;

    console.log(allBtnCounters, doneBtnCounters, toDoBtnCounters);
}
filterBtnsCount();
