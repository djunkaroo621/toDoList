var inputtedChoreVar= document.getElementById("inputtedChore");
var toDoListVar= document.getElementById("toDoList");
// var listItemVar= document.getElementById("listItem");

var toDoArray= [];

document.getElementById('subButton').addEventListener('click',hitSubmit);

function hitSubmit() {

  let x= inputtedChoreVar.value;
  toDoArray.push(x);
  console.log(toDoArray);

  localStorage.setItem('toDoKey', toDoArray);

  var newListElement= document.createElement('LI');
  var newTextNode= document.createTextNode(x);
  newListElement.appendChild(newTextNode);
  toDoListVar.appendChild(newListElement);

  var fButtonElement= document.createElement('input');
  fButtonElement.setAttribute('type','checkBox');
  fButtonElement.setAttribute('id','fButton');
  newListElement.appendChild(fButtonElement);
}
var fButtonElement= document.createElement('input');
document.querySelector('ul').addEventListener('click', strike);

function strike() {

  document.getElementById('toDoList').style.textDecoration='line-through';
}
