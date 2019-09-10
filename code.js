var inputtedChoreVar = document.getElementById("inputtedChore");
var toDoListVar = document.getElementById("toDoList");

var toDoArray = [];

document.getElementById('subButton').addEventListener('click', hitSubmit);

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

  inputtedChoreVar.value = "";

  let newListElement = document.createElement('LI');
  newListElement.setAttribute('id', 'nListElement');
  let newTextNode = document.createTextNode(x);

  function listGenerator() {
    newListElement.appendChild(newTextNode);
    toDoListVar.appendChild(newListElement);
  }

  listGenerator();

  let fButtonElement = document.createElement('input');

  function finishButtonGenerator() {
  fButtonElement.setAttribute('id', 'fButton');
  fButtonElement.setAttribute('type', 'checkbox');
  fButtonElement.setAttribute('value', 'FINISHED');
  newListElement.append(fButtonElement);
  }

  finishButtonGenerator();

  // Got help on stackoverflow below this comment for the
  // fButtonElement function- the help was
  // putting the proper argument in the function. Didn't occur to me that
  // I could manipulate the appended list item 'newListElement.'
  // Using the template for the line-through button, I was able to code the
  // delete button on my own.

  // function that calls "strike" with an argument

  fButtonElement.onclick = function() {
    strike(newListElement, fButtonElement);
  }

  var delButtonElement = document.createElement('input');
  delButtonElement.setAttribute('id', 'dButton');
  delButtonElement.setAttribute('type', 'button');
  delButtonElement.setAttribute('value', 'DELETE');
  newListElement.appendChild(delButtonElement);
  delButtonElement.onclick = function() {
    trashDunk(newListElement);
  }

  document.getElementById("universalDelete").onclick = function() {
    univDel();
  }
}

// Realized that fButtonElement must be an argument to make *unchecking* work properly.
function strike(newListElement, fButtonElement) {
  if (fButtonElement.checked) {
    newListElement.style.textDecoration = 'line-through';
  } else {
    newListElement.style.textDecoration = 'none'
  }
}

function trashDunk(newListElement) {
  newListElement.parentNode.removeChild(newListElement);
}

function univDel() {
  document.getElementById("toDoList").innerHTML = '';
}
