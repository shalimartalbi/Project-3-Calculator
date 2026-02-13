var screen = document.querySelector(".screen");
var displayvalue = "0";
var inputnumber = "";
var operator = "";
var newnumber = false;
var buttons = document.querySelectorAll(".button");
screen.textContent = displayvalue;

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var value = button.textContent;
    if (!isNaN(value)) {
      if (newnumber === true) {
        displayvalue = value;
        newnumber = false;
      } else {
        if (displayvalue === "0") {
          displayvalue = value;
        } else {
          displayvalue = displayvalue + value;
        }
      }
      screen.textContent = displayvalue;
    }
    else if (value === "C") {
      displayvalue = "0";
      inputnumber = "";
      operator = "";
      newnumber = false;
      screen.textContent = displayvalue;
    }
    else if (value === "+") {
      inputnumber = displayvalue;
      operator = "+";
      newnumber = true;
    }
    else if (value === "-") {
      inputnumber = displayvalue;
      operator = "-";
      newnumber = true;
    }
    else if (value === "x") {
      inputnumber = displayvalue;
      operator = "x";
      newnumber = true;
    }
    else if (value === "/") {
      inputnumber = displayvalue;
      operator = "/";
      newnumber = true;
    }
    else if (value === "=") {
      if (inputnumber === "") {
        return;
      }
      if (operator === "") {
        return;
      }
        var a = Number(inputnumber);
        var b = Number(displayvalue);
        if (operator === "+") {
          displayvalue = a + b;
        }
        else if (operator === "-") {
          displayvalue = a - b;
        }
        else if (operator === "x") {
          displayvalue = a * b;
        }
        else if (operator === "/") {
          if (b === 0) {
            displayvalue = "Error";
          } else {
            displayvalue = a / b;
          }
        }
        inputnumber = "";
        operator = "";
        newnumber = true;
        screen.textContent = displayvalue;
      }
  });
});
