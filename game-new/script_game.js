function clickX() {
  let a = document.getElementById("number").value;
  let show = document.getElementById("show" + a);
  console.log(show.innerText);
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");

  // document.getElementById("btn2").disabled = true;
  // document.getElementById("btn2").enabled = false;
  // document.getElementById("btn1").enabled = true;
  // document.getElementById("btn1").enabled = false;
  let value = show.innerText;
  if ((value == "X") === true || value == "O") {
    alert("already selected");
  } else {
    document.getElementById("box" + a).style.backgroundColor = "red";
    show.innerText = "X";

    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = false;

    winner();
  }
}

function clickO() {
  let a = document.getElementById("number").value;
  let show = document.getElementById("show" + a);
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let value = show.innerText;
  if ((value == "O") === true || value == "X") {
    alert("already selected");
  } else {
    document.getElementById("box" + a).style.backgroundColor = "blue";
    show.innerText = "O";

    btn1.disabled = false;
    btn2.disabled = true;
    winner();
  }
}

// function won(){
//     let arr = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
//     for(let i = o ; i <= arr.length;i++){
//         const box = document.getElementById(box[i]);
//         box.innerText = "X";
//         box.style.backgroundColor = "red";
//     }
//     alert("you won");

// document.getElementById("box1").innerText = "X";
// document.getElementById("box2").innerText = "X";
// document.getElementById("box3").innerText = "X"
//     val= ("box"+a).innerText;
//     if( val === "X"|| val == "O"){
//    alert("X won");
//     }else if( val ==="O"|| val =="X"){
//      alert("O won");
//     }

// }

function winner() {
  let show1 = document.getElementById("show1").innerText;
  let show2 = document.getElementById("show2").innerText;
  let show3 = document.getElementById("show3").innerText;
  let show4 = document.getElementById("show4").innerText;
  let show5 = document.getElementById("show5").innerText;
  let show6 = document.getElementById("show6").innerText;
  let show7 = document.getElementById("show7").innerText;
  let show8 = document.getElementById("show8").innerText;
  let show9 = document.getElementById("show9").innerText;
  if (
    show1 &&
    show2 &&
    show3 &&
    show1 == show2 &&
    show2 == show3 &&
    show3 == show1
  ) {
    document.getElementById("box1").style.backgroundColor = "green";
    document.getElementById("box2").style.backgroundColor = "green";
    document.getElementById("box3").style.backgroundColor = "green";
    alert("you won");
  } else if (
    show4 &&
    show5 &&
    show6 &&
    show4 == show5 &&
    show5 == show6 &&
    show6 == show4
  ) {
    document.getElementById("box4").style.backgroundColor = "green";
    document.getElementById("box5").style.backgroundColor = "green";
    document.getElementById("box6").style.backgroundColor = "green";
    alert("you won");
  } else if (
    show7 &&
    show8 &&
    show9 &&
    show7 == show8 &&
    show8 == show9 &&
    show9 == show7
  ) {
    document.getElementById("box7").style.backgroundColor = "green";
    document.getElementById("box8").style.backgroundColor = "green";
    document.getElementById("box9").style.backgroundColor = "green";
    alert("you won");
  } else if (
    show1 &&
    show4 &&
    show7 &&
    show1 == show4 &&
    show4 == show7 &&
    show7 == show1
  ) {
    document.getElementById("box1").style.backgroundColor = "green";
    document.getElementById("box4").style.backgroundColor = "green";
    document.getElementById("box7").style.backgroundColor = "green";
    alert("you won");
  } else if (
    show2 &&
    show5 &&
    show8 &&
    show2 == show5 &&
    show5 == show8 &&
    show8 == show2
  ) {
    document.getElementById("box2").style.backgroundColor = "green";
    document.getElementById("box5").style.backgroundColor = "green";
    document.getElementById("box8").style.backgroundColor = "green";
    alert("you won");
  } else if (
    show3 &&
    show6 &&
    show9 &&
    show3 == show6 &&
    show6 == show9 &&
    show9 == show3
  ) {
    document.getElementById("box3").style.backgroundColor = "green";
    document.getElementById("box6").style.backgroundColor = "green";
    document.getElementById("box9").style.backgroundColor = "green";
    alert("you won");
  } else if (
    show1 &&
    show5 &&
    show9 &&
    show1 == show5 &&
    show5 == show9 &&
    show9 == show1
  ) {
    document.getElementById("box1").style.backgroundColor = "green";
    document.getElementById("box5").style.backgroundColor = "green";
    document.getElementById("box9").style.backgroundColor = "green";
    alert("you won");
  } else if (
    show3 &&
    show5 &&
    show7 &&
    show3 == show5 &&
    show5 == show7 &&
    show7 == show3
  ) {
    document.getElementById("box3").style.backgroundColor = "green";
    document.getElementById("box5").style.backgroundColor = "green";
    document.getElementById("box7").style.backgroundColor = "green";
    alert("you won");
  }
}

// function winnerCheck(){
//     for(let a=1 ; a<= 9;a++){
//         let value =document.getElementById("box"+a).innerText;
//         if(value == "X"){
//             alert(" X won");
//             return;
//         }else if(value =="O"){
//             alert(" O won");
//             return;
//         }
//     }
// }
