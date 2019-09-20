const inputtedChoreVar = document.getElementById('inputted-chore');
const toDoListVar = document.getElementById('to-do-list');
const toDoArray = [];

localStorage.setItem('toDoKey', JSON.stringify(toDoArray));

document.getElementById('sub-button').addEventListener('click', hitSubmit);

function hitSubmit() {
    if (inputtedChoreVar.value.length === 0) {
        return;
    }

// Creates the list
    const x = inputtedChoreVar.value;
    toDoArray.push(x);
    console.log(toDoArray);

    inputtedChoreVar.value = '';

    const newListItem = document.createElement('LI');
    newListItem.setAttribute('id', 'new-list-element');
    const newTextNode = document.createTextNode(x);
    console.log(newTextNode);

    createList(newListItem, toDoListVar, newTextNode);

// Creates the finish button (checkbox)
    const finishButton = document.createElement('input');

    createFinishButton(newListItem, finishButton);

    finishButton.onclick = function () {
        strikeListItem(newListItem, finishButton);
    }

// Function call that creates the delete button
    const deleteButton = document.createElement('input');

    createDeleteButton(deleteButton, newListItem);

// Function call that creates the empty list button
    createEmptyButton();
}

// Function executes the line through feature
const strikeListItem = (newListItem,finishButton) => {
    finishButton.checked ? newListItem.style.textDecoration = 'line-through' :
    newListItem.style.textDecoration = 'none'
    }

// Function executes creating a todo list item
const createList = (newListItem, toDoListVar, newTextNode) => {
    newListItem.appendChild(newTextNode);
    toDoListVar.appendChild(newListItem);
    }

// Function executes the checkbox line-through feature
const createFinishButton = (newListItem, finishButton) => {
    finishButton.setAttribute('id', 'finish-checkbox');
    finishButton.setAttribute('type', 'checkbox');
    finishButton.setAttribute('value', 'FINISHED');
    newListItem.append(finishButton);
    }

// Function creates the red delete button
const createDeleteButton = (deleteButton, newListItem) => {
    deleteButton.setAttribute('id', 'delete-button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', 'DELETE');
    newListItem.appendChild(deleteButton);
    deleteButton.onclick = function () {
        redDeleteItem(newListItem);
        }
    }

// Function executes the delete feature when pressing the red delete button
const redDeleteItem = (newListItem) => newListItem.parentNode.removeChild(newListItem);

// Function executes the empty list button
const createEmptyButton = () => {
    document.getElementById('empty-list').onclick = function emptyList() {
        document.getElementById('to-do-list').innerHTML = '';
    }
}
