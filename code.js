var inputtedChoreVar= document.getElementById("inputtedChore");
var toDoListVar= document.getElementById("toDoList");

var toDoArray= [];

document.getElementById('subButton').addEventListener('click',hitSubmit);

function hitSubmit() {

  let x= inputtedChoreVar.value;
  toDoArray.push(x);
  console.log(toDoArray);

  localStorage.setItem('toDoKey', toDoArray);

  inputtedChoreVar.value= '';

  var newListElement= document.createElement('LI');
  var newTextNode= document.createTextNode(x);
  newListElement.appendChild(newTextNode);
  toDoListVar.appendChild(newListElement);

  var fButtonElement= document.createElement('input');
  fButtonElement.setAttribute('id','fButton');
  fButtonElement.setAttribute('type','checkbox');
  fButtonElement.setAttribute('value','FINISHED');
  newListElement.append(fButtonElement);
// Got help on stackoverflow below this comment for the
// fButtonElement function- the help was
// putting the proper argument in the function. Didn't occur to me that
// I could manipulate the appended list item 'newListElement.'
// Using the template for the line-through button, I was able to code the
// delete button on my own.
  fButtonElement.onclick= function() {
    strike(newListElement, fButtonElement);
  } // function that calls "strike" with an argument

  var delButtonElement= document.createElement('input');
  delButtonElement.setAttribute('id','dButton');
  delButtonElement.setAttribute('type','button');
  delButtonElement.setAttribute('value','DELETE');
  newListElement.appendChild(delButtonElement);
  delButtonElement.onclick= function() {
    trashDunk(newListElement);
  }
  document.getElementById("universalDelete").onclick= function() {
    univDel();
  }
}
// Realized that fButtonElement must be an argument to make unchecking work properly.
function strike(newListElement, fButtonElement) {

  if (fButtonElement.checked) {newListElement.style.textDecoration='line-through';
} else {newListElement.style.textDecoration='none'}
}
function trashDunk(newListElement) {
  newListElement.parentNode.removeChild(newListElement);
}
function univDel() {
  var dad= document.getElementById("divDad");
  var kiddo= document.getElementById("toDoList");
  dad.parentNode.removeChild(kiddo);
}
//
// onload
// localStorage.getItem('toDoKey');
