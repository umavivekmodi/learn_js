

function print_star() {
    let rows = document.getElementById("rows").value;
    outpuut = "";
    for(i = 1; i <= rows; i++) {
      for(j = 1; j <= i; j++) {
        outpuut = outpuut + "*";
        console.log(outpuut);
        }

      outpuut = outpuut + "\n";
    }

    document.getElementById("pattern").innerText = outpuut;
  }


  function clearr() {
    document.getElementById("pattern").innerHTML = "";
    document.getElementById("rows").value = "";
}