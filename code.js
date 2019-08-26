const inputtedChore= document.getElementById("inputtedChore");
const subButton= document.getElementById("subButton");
const compiledList= document.getElementById("compiledList");

let toDoArray= [];

function hitSubmit() {

const toDoValue= inputtedChore.value;

toDoArray.push(toDoValue);

let strungList= JSON.stringify(toDoArray);
console.log(strungList);
inputtedChore.innerHTML= localStorage.setItem("toDoKey", strungList);

let parsedList= JSON.parse(strungList);

//something is buggy below this comment that is making the output get progressively longer instead of being a distinct todo list item.
for (let i= 0; i< localStorage.length; i++) {

//the single line of code directly below took approx. 4-5 hours to think of.
  toDoArray.shift(toDoValue);
  const value= localStorage.getItem(i);
  var appender= document.createElement("P");
  compiledList.appendChild(appender);
  compiledList.innerHTML += parsedList;
  }
}




// BRAINSTORMING CODE
// function hitSubmit() {
// const value = inputtedChore.value;
//
// if (value) {
//   localStorage.setItem(value, value);
//   location.reload();
//   }
// }
//
// for (let i = 0; i < localStorage.length; i++) {
//
// const key = localStorage.key(i);
// const value = localStorage.getItem(key);
//
// var list = document.createElement("P");
//
// var finishedButton = document.createElement("input");
// finishedButton.setAttribute('type','radio');
// finishedButton.setAttribute('id','finish');
//
// var delButton = document.createElement("input");
// delButton.setAttribute('type','radio');
//
// compiledList.appendChild(list);
// compiledList.appendChild(finishedButton);
// compiledList.appendChild(delButton);
//
// compiledList.innerHTML += value;
// }
// document.getElementById("compiledList").innerHTML = choreX;
