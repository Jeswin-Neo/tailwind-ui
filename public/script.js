let counter = 1;

var increase = function () {
  counter++;
};

var decrease = function () {
  counter--;
};

const getValue = () => {
  document.getElementById("count").innerHTML = counter;
  document.getElementById("subtotal").innerHTML = `$${counter * 99}`;
  document.getElementById("total").innerHTML = `$${counter * 99 + 10}`;
};

document.getElementById("decrement").addEventListener("click", () => {
  if (counter >= 2) {
    decrease();
  }
  getValue();
});

document.getElementById("increment").addEventListener("click", () => {
  increase();
  getValue();
});
