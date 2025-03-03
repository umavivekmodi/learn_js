function print_star() {
  let rows = document.getElementById("rows").value;

  let star = "";

  for (let i = 1; i <= rows * rows; ++i) {
    for (let j = 1; j <= rows * rows; ++j) {
      if (
        (i > rows * rows - rows || j <= rows || j > rows * rows - rows) &&
        !(i == rows * rows && j == rows * rows) &&
        !(i == rows * rows && j == 1)
      ) {
        star = star + "*&nbsp;&nbsp; ";
      } else {
        star += "&nbsp;&nbsp;&nbsp;";
      }
    }

    star += "\n"; // Move to next line
    // star += "<br>";
  }

  console.log(star);

  document.getElementById("pattern").innerHTML = star;
}

function clearr() {
  document.getElementById("pattern").innerHTML = "";
  document.getElementById("rows").value = "";
}

//   let c=3;
// let star = "";
// for(let a = 1; a <= c*c ;++a){
//     for( b=1 ; b<=c*c ; ++b){
//     // if(a==7||a==8||(a==9|| b==9)||b==1||b==2||b==3||b==7||b==8 ||(b==9) )
//         // if((a==7||a==8 ||a==9 || b==1 ||b==2||b==3||b==7||b==8||b==9) &&
//         //     (!(a== 9 && b==9) && !(a==9 && b==1)))
//         if((a >(c*c)-c|| b <= c|| b >(c*c)-c ) && !(a ==c*c && b==c*c)&&!(a==c*c && b ==1) ){

//             star = star+"* ";

//         }
//         else{
//             star += "  ";
//         }
//     }
//     star = star + "\n";

// }
// console.log(star);


function add(a,b){
    return a+b;
    
}
console.log(add);

let arr= [0 , "a" , true , () => console.log("hii"),{
    num : "jay",age:20

}]
console.log(arr[3]);