var inputtedChoreVar = document.getElementById('inputted-chore');
var toDoListVar = document.getElementById('to-do-list');

var toDoArray = [];

document.getElementById('sub-button').addEventListener('click', hitSubmit);

function hitSubmit() {
  if (inputtedChoreVar.value.length === 0) {
    return;
  }

  let x = inputtedChoreVar.value;
  toDoArray.push(x);
  console.log(toDoArray);

  localStorage.setItem('toDoKey', JSON.stringify(toDoArray));

  inputtedChoreVar.value = '';

  let newListItem = document.createElement('LI');
  newListItem.setAttribute('id', 'new-list-element');
  let newTextNode = document.createTextNode(x);

  function createList() {
    newListItem.appendChild(newTextNode);
    toDoListVar.appendChild(newListItem);
  }

  createList();
  createFinishButton(newListItem);
  createDeleteButton(newListItem);
  createEmptyButton(newListItem);

  let finishButton = document.createElement('input');

  function createFinishButton() {
    finishButton.setAttribute('id', 'finish-checkbox');
    finishButton.setAttribute('type', 'checkbox');
    finishButton.setAttribute('value', 'FINISHED');
    newListItem.append(finishButton);
  }

  finishButton.onclick = function() {
    strikeListItem(newListItem, finishButton);
  }

  function strikeListItem(newListItem, finishButton) {
    if (finishButton.checked) {
      newListItem.style.textDecoration = 'line-through';
    } else {
      newListItem.style.textDecoration = 'none'
    }

    strikeListItem();

  function createDeleteButton(newListItem) {
    var deleteButton = document.createElement('input');
    deleteButton.setAttribute('id', 'delete-button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', 'DELETE');
    newListItem.appendChild(deleteButton);
    deleteButton.onclick = function() {
      redDeleteItem(newListItem) {
        newListItem.parentNode.removeChild(newListItem);
      }
    }
  }

    createDeleteButton();

  function createEmptyButton() {
    document.getElementById('empty-list').onclick = function emptyList() {
      document.getElementById('to-do-list').innerHTML = '';
    }
  }

    createEmptyButton();
  }
