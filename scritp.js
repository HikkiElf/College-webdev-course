function addTask() {

    const inputField = document.querySelector('#input-field');
    let taskText = inputField.value;
    if (taskText === '') return;
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
    divTask.append(inputCheckbox, innerTaskText, crossBtn);
    tasksContainer.appendChild(divTask);
    inputField.value = '';
}

function deleteTask() {
    
    
}