
window.onload = loadTasks;

function loadTasks() {
    if (localStorage.getItem("tasks") == null) return;

    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    const tasksContainer = document.querySelector('#tasks-container');

    tasks.forEach(task => {
        const divTask = document.createElement('div');
        divTask.className = 'task';
        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.setAttribute('onclick', 'taskCompleted(this)');
        inputCheckbox.checked = task.completed;
        const innerTaskText = document.createElement('p');
        innerTaskText.textContent = task.text;
        const crossBtn = document.createElement('button');
        crossBtn.textContent = '✖';
        crossBtn.setAttribute('onclick', 'removeTask(this)');
        crossBtn.className = 'remove-task'
        divTask.append(inputCheckbox, innerTaskText, crossBtn);
        tasksContainer.appendChild(divTask);
    });
}




function addTask() {

    const inputField = document.querySelector('#input-field');
    let taskText = inputField.value;
    if (taskText === '' || taskText.match(/^ +$/g)) return;
    let isAlreadyExist = false;
    document.querySelectorAll(`p`).forEach(item => {
        if (item.textContent === taskText) isAlreadyExist = true;
    });
    if (isAlreadyExist) {alert("Task already exist!"); return}
    const tasksContainer = document.querySelector('#tasks-container');
    const divTask = document.createElement('div');
    divTask.className = 'task';
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.setAttribute('onclick', 'taskCompleted(this)');
    const innerTaskText = document.createElement('p');
    innerTaskText.textContent = taskText;
    const crossBtn = document.createElement('button');
    crossBtn.textContent = '✖';
    crossBtn.setAttribute('onclick', 'removeTask(this)');
    crossBtn.className = 'remove-task'
    divTask.append(inputCheckbox, innerTaskText, crossBtn);
    tasksContainer.appendChild(divTask);
    inputField.value = '';


    localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { text : taskText, completed: false}]));
}

function taskCompleted(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task =>{
        if (task.text === event.nextElementSibling.textContent) {
            task.completed = !task.completed;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


function removeTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
        if (task.text === event.parentNode.children[1].textContent) {
            tasks.splice(tasks.indexOf(task), 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.parentNode.remove()
}


let inputField = document.querySelector('#input-field');


inputField.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('button').click();
    }
});