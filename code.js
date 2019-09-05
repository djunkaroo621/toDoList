var inputtedChoreVar= document.getElementById("inputtedChore");
var toDoListVar= document.getElementById("toDoList");

var toDoArray= [];

document.getElementById('subButton').addEventListener('click',hitSubmit);

function hitSubmit() {

  let x= inputtedChoreVar.value;
  toDoArray.push(x);
  console.log(toDoArray);

  localStorage.setItem('toDoKey', toDoArray);

  inputtedChore.value="What's next?";

  var newListElement= document.createElement('LI');
  var newTextNode= document.createTextNode(x);
  newListElement.appendChild(newTextNode);
  toDoListVar.appendChild(newListElement);

  var fButtonElement= document.createElement('input');
  fButtonElement.setAttribute('type','button');
  fButtonElement.setAttribute('value','FINISHED');
  newListElement.appendChild(fButtonElement);
// Got help on stackoverflow below this comment for the
// fButtonElement function- the help was the
// putting proper argument in the function:
// Using the template for the line-through button, I was able to code the delete
// button on my own.
  fButtonElement.onclick= function() {
    strike(newListElement);
  } // function that calls "strike" with an argument

  var delButtonElement= document.createElement('input');
  delButtonElement.setAttribute('type','button');
  delButtonElement.setAttribute('value','DELETE');
  newListElement.appendChild(delButtonElement);
  delButtonElement.onclick= function() {
    trashDunk(newListElement);
  }
}
function strike(newListElement) {
  newListElement.style.textDecoration='line-through';
}
function trashDunk(newListElement) {
  newListElement.parentNode.removeChild(newListElement);
}
