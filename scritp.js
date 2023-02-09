



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
            console.log(element.parentNode, 'is the li element');
            element.parentNode.remove();

        }
    }
    
    
}