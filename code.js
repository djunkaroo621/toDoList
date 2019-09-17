const inputtedChoreVar = document.getElementById('inputted-chore');
const toDoListVar = document.getElementById('to-do-list');
const toDoArray = [];

localStorage.setItem('toDoKey', JSON.stringify(toDoArray));

document.getElementById('sub-button').addEventListener('click', hitSubmit);

function hitSubmit() {
  if (inputtedChoreVar.value.length === 0) {
    return;
  }

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

  const finishButton = document.createElement('input');

  const createFinishButton = () => {
    finishButton.setAttribute('id', 'finish-checkbox');
    finishButton.setAttribute('type', 'checkbox');
    finishButton.setAttribute('value', 'FINISHED');
    newListItem.append(finishButton);
  }

  createFinishButton();

  finishButton.onclick = function() {
    strikeListItem(newListItem, finishButton);
  }

  const deleteButton = document.createElement('input');

  const createDeleteButton = () => {
    deleteButton.setAttribute('id', 'delete-button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', 'DELETE');
    newListItem.appendChild(deleteButton);
    deleteButton.onclick = function() {
      redDeleteItem(newListItem);
    }
  }

  createDeleteButton();

  const createEmptyButton = () => {
    document.getElementById('empty-list').onclick = function emptyList() {
      document.getElementById('to-do-list').innerHTML = '';
    }
  }
  createEmptyButton();
}

const strikeListItem = (newListItem, finishButton) => {
  if (finishButton.checked) {
    newListItem.style.textDecoration = 'line-through';
  } else {
    newListItem.style.textDecoration = 'none'
  }
}

const redDeleteItem = (newListItem) => newListItem.parentNode.removeChild(newListItem);
