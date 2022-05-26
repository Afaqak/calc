let display = document.querySelector(".display");
let displaycalc = document.querySelector(".display-calc");
const buttons = document.querySelectorAll(".buttons");

let arrButtons = Array.from(buttons);
console.log(arrButtons);
arrButtons.forEach((button) =>
  button.addEventListener("click", function (e) {
    switch (e.target.innerHTML) {
      case "C":
        displaycalc.textContent = "";
        display.textContent = "";
        break;
      case "b":
        displaycalc.textContent = displaycalc.textContent.slice(
          0,
          displaycalc.textContent.length - 1
        );
        break;
      case "=":
        let result = eval(displaycalc.textContent);
        display.textContent = result;
        displaycalc.textContent = "";
      default:
        displaycalc.innerHTML += e.target.innerHTML;
    }
  })
);
