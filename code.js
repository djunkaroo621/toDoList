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

    const createList = () => {
        newListItem.appendChild(newTextNode);
        toDoListVar.appendChild(newListItem);
    }

    createList();

// Creates the finish button
    const finishButton = document.createElement('input');

    const createFinishButton = () => {
        finishButton.setAttribute('id', 'finish-checkbox');
        finishButton.setAttribute('type', 'checkbox');
        finishButton.setAttribute('value', 'FINISHED');
        newListItem.append(finishButton);
    }

    createFinishButton();

    finishButton.onclick = function () {
        strikeListItem(newListItem, finishButton);
    }

// Creates the delete button
    const deleteButton = document.createElement('input');

    const createDeleteButton = () => {
        deleteButton.setAttribute('id', 'delete-button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('value', 'DELETE');
        newListItem.appendChild(deleteButton);
        deleteButton.onclick = function () {
            redDeleteItem(newListItem);
        }
    }

    createDeleteButton();

// Creates the empty list button and executes the empty list feature
    const createEmptyButton = () => {
        document.getElementById('empty-list').onclick = function emptyList() {
            document.getElementById('to-do-list').innerHTML = '';
        }
    }
    createEmptyButton();
}

// Executes the line through feature
const strikeListItem = (newListItem, finishButton) => {
    finishButton.checked ? newListItem.style.textDecoration = 'line-through' :
    newListItem.style.textDecoration = 'none'
    }

// Executes the delete feature when pressing the red delete button
const redDeleteItem = (newListItem) => newListItem.parentNode.removeChild(newListItem);
