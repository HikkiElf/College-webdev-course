
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
        inputCheckbox.checked = task.completed;
        const innerTaskText = document.createElement('p');
        innerTaskText.textContent = task.task;
        const crossBtn = document.createElement('button');
        crossBtn.textContent = '✖';
        crossBtn.setAttribute('onclick', 'deleteTask()');
        crossBtn.className = 'remove-task'
        divTask.append(inputCheckbox, innerTaskText, crossBtn);
        tasksContainer.appendChild(divTask);
    });
}




function addTask() {

    const inputField = document.querySelector('#input-field');
    let taskText = inputField.value;
    if (taskText === '' || taskText.match(/^ +$/g)) return;
    console.log(taskText);
    const tasksContainer = document.querySelector('#tasks-container');
    const divTask = document.createElement('div');
    divTask.className = 'task';
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    const innerTaskText = document.createElement('p');
    innerTaskText.textContent = taskText;
    const crossBtn = document.createElement('button');
    crossBtn.textContent = '✖';
    crossBtn.setAttribute('onclick', 'deleteTask()');
    crossBtn.className = 'remove-task'
    divTask.append(inputCheckbox, innerTaskText, crossBtn);
    tasksContainer.appendChild(divTask);
    inputField.value = '';


    localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: taskText, completed: false}]));
}


let inputField = document.querySelector('#input-field');


inputField.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('button').click();
    }
});


function deleteTask() {
    
    for (let element of event.composedPath()) {
        if (element.matches && element.matches("button.remove-task")) {

            console.log(element, 'is the button clicked');
            console.log(element.parentNode, 'is the parent element');
            element.parentNode.remove();

        }
    }
    
    
}