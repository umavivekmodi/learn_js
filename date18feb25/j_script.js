

function print_star() {
    let rows = document.getElementById("rows").value;
  
     star= "";
    for(i = 1; i <= rows; i++) {
      for(j = 1; j <= i; j++) {
        star = star + "*";
        console.log(star);
        }
        star = star + "\n";
      }

      // reverse print of star
      for(let k = rows -1 ; k >=1 ; k--){
        for(let l= 1 ; l <= k ; l++){
          star = star + "*";
        }
        star = star + '\n';
      }
      document.getElementById("pattern").innerText = star;

      
  }


  function clearr() {
    document.getElementById("pattern").innerHTML = "";
    document.getElementById("rows").value = "";
} 
