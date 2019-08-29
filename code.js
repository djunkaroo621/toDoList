const inputBox= document.getElementById('inputtedChore');
const myListVar= document.getElementById('myList');
const liItemVar= document.getElementById('liItem');

let toDoArray= [];

function hitSubmit() {
var x = inputBox.value;
var newLi= document.createElement("LI");
var newText= document.createTextNode(x);

newLi.appendChild(newText);

myListVar.appendChild(newLi);

toDoArray.push(x);
console.log(toDoArray);

localStorage.setItem('toDoKey',toDoArray);

inputBox.value= "";

var checkBox= document.createElement("input");
checkBox.setAttribute("type","checkBox");
checkBox.setAttribute("id","fButton");
newLi.appendChild(checkBox);

var deleteButton= document.createElement("input");
deleteButton.setAttribute("type","button");
deleteButton.setAttribute("value","DELETE");
newLi.appendChild(deleteButton);

document.getElementById("fButton").onclick= strike;

function strike() {
myListVar.style.textDecoration= "line-through";
  }
}



//
// for (i= 0; i< localStorage.length; i++) {
//   }

//
// let strungList= JSON.stringify(toDoArray);
// inputtedChore.innerHTML= localStorage.setItem("toDoKey", strungList);
// JSON.parse(localStorage.getItem("toDoKey"));
//
// var checkBox= document.createElement("input");
// checkBox.setAttribute("type","button");
// checkBox.setAttribute("value","FINISHED");
// checkBox.setAttribute("id","fButton");
// // checkBox.setAttribute("onclick",strike());
// newLi.appendChild(checkBox);
//
// }
//
// var deleteButton= document.createElement("input");
// deleteButton.setAttribute("type","button");
// deleteButton.setAttribute("value","DELETE");
// newLi.appendChild(deleteButton);
// }
//
//   }
