const rectangle = document.querySelector("#rectangle");
const button = document.querySelector("#button");
const square1 = document.querySelector("#square1");
const circlebutton = document.querySelector("#square1-button");
const circle2 = document.querySelector("#circle2");
const square = document.querySelector("#square");
const squarebutton = document.querySelector("#square-button");
const button2 = document.querySelector("#button2");

circle2.style.display = "none";
circle.style.display = "none";
square.style.display = "none";
button2.style.display = "none";

// Adding an event to the button to display the circle
button.addEventListener("click", function () {
  circle.style.display = "block";
  button.style.display = "none";
});

// Adding an event to push the circle out
circlebutton.addEventListener("click", function () {
  rectangle.style.display = "block";
  button.style.display = "none";
  circle2.style.display = "block";
  square.style.display = "none";
  squarebutton.style.display = "none";
  circle.style.display = "block";
  button2.style.display = "block";
  circlebutton.style.display = "none";
});

// Adding an event to display the square
button2.addEventListener("click", function () {
  square.style.display = "block";
  rectangle.style.display = "block";
  circle.style.display = "block";
  // circle2.style.display = "block";
  button2.style.display = "none";
});
