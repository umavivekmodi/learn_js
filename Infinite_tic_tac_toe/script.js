const container = document.getElementsByClassName("container");
// console.log(container);

const main = document.getElementsByClassName("main");
// console.log(main);

const inner = document.querySelectorAll(".inner");
console.log(inner);

const input = document.getElementById("number");
// console.log(input);

const btnX = document.getElementById("btn1");
// console.log(btnX);

const btnO = document.getElementById("btn2");
// console.log(btnO);

const array = ["", "", "", "", "", "", "", "", ""]; // to use it for check condition 

const moves = []; // to track the positions 
function clickX() {
  // alert("hello");
  let boxValue = parseInt(input.value);
  console.log(boxValue);

  let outerBox = document.getElementById("box" + boxValue);
  console.log(outerBox);

  let Text = document.getElementById("text" + boxValue);
  console.log(Text);
  if (array[boxValue - 1] === "X" || array[boxValue - 1] === "O") {
    alert("already selected");
  } else {
    outerBox.style.backgroundColor = "blue";
    Text.innerText = "X";
    array[boxValue - 1] = "X";
  }
  //   if(array[0] == array[1] && array[1] == array[2])
//   winner("X");

  if (winner("X")) return;
  btnX.disabled = true;
  btnO.disabled = false;

  movesUpdate(boxValue - 1);
}

function clickO() {
  let boxValue = parseInt(input.value);

  let outerBox = document.getElementById("box" + boxValue);
  console.log(outerBox);

  let Text = document.getElementById("text" + boxValue);
  console.log(Text);

  if (array[boxValue - 1] === "O" || array[boxValue - 1] === "X") {
    alert("already selected");
  } else {
    outerBox.style.backgroundColor = "pink";
    Text.innerText = "O";
    array[boxValue - 1] = "O";
  }
  console.log(array);
//   winner("O");

if (winner("O")) return;


  btnX.disabled = false;
  btnO.disabled = true;
  movesUpdate(boxValue - 1);
}

function winner(a) {
  if (
    // array[0] !== "" && array[0] == array[1] && array[1] == array[2] before it 
    // after it 
    (array[0] === a && array[1] === a && array[2] ===a ) ||
    (array[3] === a && array[4] === a && array[5] ===a ) ||
    (array[6] === a && array[7] === a && array[8] ===a ) ||
    (array[0] === a && array[3] === a && array[6] ===a ) ||
    (array[1] === a && array[4] === a && array[7] ===a ) ||
    (array[2] === a && array[5] === a && array[8] ===a ) ||
    (array[0] === a && array[4] === a && array[8] ===a ) ||
    (array[2] === a && array[4] === a && array[6] ===a )
  ) {
    alert(a + " won");
    console.log("result :>> ", a);
    return true;
  }
  return false;
}

function inputValidation(){
//   document.getElementById("number");
let inputField = document.getElementById("number");
 let boxValue = parseInt(input.value);
 let errorMassage = document.getElementById("errorMassage");
    if(boxValue < 1 || boxValue > 9 ){
        errorMassage.innerText = "please enter a number between 1-9";
        inputField.style.border = "2px solid red";
    }else{
        errorMassage.innerText = "";
        inputField.style.border = "1px solid black";
    }
}
 document.getElementById("number").addEventListener("input", inputValidation);


 function movesUpdate(position){
    if(moves.length === 5){
        let firstMove = moves.shift();
        array[firstMove] = "";
        document.getElementById("box" +(firstMove +1)).style.backgroundColor= "";
        document.getElementById("text" + (firstMove+ 1)).innerText ="";
    }
    moves.push(position)
    console.log(moves);
    console.log(array);
 }