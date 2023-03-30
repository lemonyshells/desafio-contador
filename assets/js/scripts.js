const displayObj = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  if (currentNumber < 0) {
    displayObj.style.color = "red";
  } else {
    displayObj.style.color = "black";
  }
  displayObj.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  if (currentNumber < 0) {
    displayObj.style.color = "red";
  } else {
    displayObj.style.color = "black";
  }
  displayObj.innerHTML = currentNumber;
}

subtrair.addEventListener("click", decrement);
adicionar.addEventListener("click", increment);
