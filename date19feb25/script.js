function print_star() {
  let rows = document.getElementById("rows").value;
  let star = "";

  for (let i = 1; i <= 5; i++) {
    // Decreasing rows
    for (let j = 0; j <= rows - i; j++) {
      star += "&nbsp;"; // Add spaces
    }
    for (let k = 1; k <= i; k++) {
      if (k == 1 || k == i || rows == i) star += "*&nbsp;";
      else {
        star += "&nbsp;&nbsp;";
      } // Add stars with space
    }
    star += "\n"; // Move to next line
  }

  console.log(star);

  document.getElementById("pattern").innerHTML = star;
}

function clearr() {
  document.getElementById("pattern").innerHTML = "";
  document.getElementById("rows").value = "";
}
