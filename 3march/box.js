// let res = document.getElementById("result").innerHTML;
// console.log(res);
// var result = document.getElementById("result");
// var boxTemp = `<div class= "box"> <input type="number"/></div>`;

// result.innerHTML = boxTemp;
// console.log(boxTemp);

// var boxTemp = `<div class= "box"> <input type="number"/></div>`;

// document.getElementById("createbox").addEventListener("click" , () => {
//     alert("hello");
// })

// let count =document.getElementById("count").addEventListener("input" , function(){
//     console.log(count);
//     count += parseInt(this.value) || 0;
//     console.log(count);
//     var result = document.getElementById("result");
//     result.innerHTML = "";
//     for(i= 0 ; i<count*count ; i++){
//         result.innerHTML += `<div class="box"></div>`
//     }
// })

let count = document.getElementById("count");
const createBox = document.getElementById("createBox");
const checkBtn = document.getElementById("check");
const result = document.getElementById("result");

result.innerText = "hello";

createBox.addEventListener("click", function () {
  let value = parseInt(count.value);
  if (value === 0 || isNaN(value)) {
    alert("please enter a valid number greater then 0");
    count.value = "";
  } else {
    console.log(value);
    result.innerHTML = "";

    var boxTemp = "";
    for (i = 0; i < value * value; i++) {
      boxTemp += `<div class="box"><input onChange="some(this)" class="box_input"  type="number"/></div>`;
    }
  }

  result.innerHTML = boxTemp;
  console.log(box_input);
});
function some(inner) {
    let val = inner.value;
  if( val != 1 && val !=5 && val !=7 && val!=11 && val !=13 ){
    
    alert("wrong number");
    inner.value = "";
  }else{
    alert("right number");
  }
}

checkBtn.addEventListener("click", function () {
  let input = document.querySelectorAll(".box_input");

  console.log(input);
  input.forEach((input) => {
    console.log(input.value);
  });
});

// count.addEventListener("input" , function(){
//     // console.log(count);
//     count += parseInt(count.value) || 0;
//     console.log(count);

// })
// let inputs = document.querySelectorAll("box_input");
// let numbersss = [];
// inputs.forEach((box_input) => {
//     let numbresss = parseInt(box_input.value);
//     if(isPrime(numbersss)){
//         primeNumbers.push(numbresss);
//     }
// })
