var inputtedChoreVar = document.getElementById('inputted-chore');
var toDoListVar = document.getElementById('to-do-list');

var toDoArray = [];

document.getElementById('sub-button').addEventListener('click', hitSubmit);

function hitSubmit() {

  if (inputtedChoreVar.value.length <= 0) {
    newListElement = false;
  }

  let x = inputtedChoreVar.value;
  toDoArray.push(x);
  console.log(toDoArray);

  localStorage.setItem('toDoKey', JSON.stringify(toDoArray));

  // document.getElementById('inputtedChore').onkeydown = function(e){
  //    if(e.keyCode == 13) {
  //      hitSubmit();
  //     }
  //   }

  inputtedChoreVar.value = '';

  let newListItem = document.createElement('LI');
  newListItem.setAttribute('id', 'new-list-element');
  let newTextNode = document.createTextNode(x);

  function listGenerator() {
    newListItem.appendChild(newTextNode);
    toDoListVar.appendChild(newListItem);
  }

  listGenerator();

  let finishButton = document.createElement('input');

  function finishButtonGenerator() {
    finishButton.setAttribute('id', 'finish-checkbox');
    finishButton.setAttribute('type', 'checkbox');
    finishButton.setAttribute('value', 'FINISHED');
    newListItem.append(finishButton);
  }

  finishButtonGenerator();

  // Got help on stackoverflow below this comment for the
  // fButtonElement function- the help was
  // putting the proper argument in the function. Didn't occur to me that
  // I could manipulate the appended list item 'newListElement.'
  // Using the template for the line-through button, I was able to code the
  // delete button on my own.

  // function that calls "strike" with an argument

  finishButton.onclick = function() {
    strikeListItem(newListItem, finishButton);
  }

  var deleteButton = document.createElement('input');
  deleteButton.setAttribute('id', 'delete-button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('value', 'DELETE');
  newListItem.appendChild(deleteButton);
  deleteButton.onclick = function() {
    redDeleteItem(newListItem);
  }

  document.getElementById('empty-list').onclick = function() {
    emptyList();
  }
}

// Realized that fButtonElement must be an argument to make *unchecking* work properly.
function strikeListItem(newListItem, finishButton) {
  if (finishButton.checked) {
    newListItem.style.textDecoration = 'line-through';
  } else {
    newListItem.style.textDecoration = 'none'
  }
}

function redDeleteItem(newListItem) {
  newListItem.parentNode.removeChild(newListItem);
}

function emptyList() {
  document.getElementById('to-do-list').innerHTML = '';
}
