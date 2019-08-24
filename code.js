
const question = document.getElementById("question");
const compiledList = document.getElementById("compiledList");
const mainDiv = document.getElementById("leest");


function hitSubmit() {
const value = question.value;

if (value) {
  localStorage.setItem(value, value);
  location.reload();
}

}

for (let i = 0; i < localStorage.length; i++) {

const key = localStorage.key(i);
const value = localStorage.getItem(key);

var list = document.createElement("P");

var finishedButton = document.createElement("input");
finishedButton.setAttribute('type','radio');
finishedButton.setAttribute('name','finished');

var delButton = document.createElement("input");
delButton.setAttribute('type','radio');
delButton.setAttribute('name','delete');

compiledList.appendChild(list);
compiledList.appendChild(finishedButton);
compiledList.appendChild(delButton);

compiledList.innerHTML += value;
}
// compiledList.style.textDecoration="line-through";
// }

// onclick='this.style.textDecoration="line-through"'
// document.querySelector("#compiledList").style.textDecoration= "line-through";

//
// document.getElementById("compiledList").innerHTML = "<del>turtle</del>";
//
// }


// function strikeThrough() {
//
// compiledList.changeStyle
//
// }
//
//
// compiledList.addEventListener("click",);

//brainstorm code below:
// document.getElementById("compiledList").innerHTML = mav;


//
// localStorage.setItem("chore", choreX);
// let mav = localStorage.getItem("chore");
// document.getElementById("compiledList").innerHTML = mav;




// document.getElementById("compiledList").innerHTML = choreX;
// localStorage.setItem("chore", choreX);
// for(let i = 0; i <= localStorage.length; i++) {
//   localStorage.setItem("chore", choreX);
//
// }



// var listElement = document.createElement("li");
// var goober = document.getElementById("compiledList");
// }
//
// var listElement = document.createElement("li");
// var goober = document.getElementById("compiledList");
// goober.appendChild(listElement);
// document.getElementById("compiledList").innerHTML=choreX;



//
// var x = localStorage.getItem('chore');
// document.getElementById("leest").innerHTML = x;




// function listFunc() {
//   var para = document.createElement("P");
//   para.innerText = x;
//   document.body.appendChild(para);
// }


// localStorage.getItem("chore", choreX);
// document.getElementById('textbox').innerHTML = key:"chore";



// var y = (document.getElementById("compiledList").innerHTML = "What's first?");
// console.log(y);

// var x = document.getElementById("compiledList").value;
// console.log(x);
// var x = document.getElementById("compiledList").innerHTML;
// localStorage.setItem('chore', x);


// let newVar;
// newVar = document.getElementById("compiledList").innerHTML;
// localStorage.setItem("chore", newVar);

// localStorage.setItem(choreX, choreX);
//
// var toDo = localStorage.getItem(choreX);
// document.getElementById("compiledList").innerHTML = toDo;


//brainstorming code
// localStorage.setItem("chore", choreX);
//
// document.getElementById("compiledList").innerHTML = choreX;
