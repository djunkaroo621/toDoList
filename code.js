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

for (let i= 0; i< localStorage.length; i++) {

  toDoArray.shift(toDoValue);
  const value= localStorage.getItem(i);
  var appender= document.createElement("P");
  var finishedButton= document.createElement("input");
  finishedButton.setAttribute('type','checkbox');
  finishedButton.setAttribute('id','finishedButton');
  finishedButton.setAttribute('onclick',strike());

  compiledList.appendChild(appender);
  compiledList.appendChild(finishedButton);
  compiledList.innerHTML += parsedList;
  }
  function strike() {
    document.getElementById("compiledList").style.textDecoration= "line-through";
  }
}
