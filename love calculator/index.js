var male = document.getElementById("males");
var female = document.getElementById("females");
male = "Raj";
female ="Sunita";
const maxNumber = 100; // maximum number
const minNumber = 55; // minimum number

// get the parent element where you want to append the new paragraph
const parentElement = document.getElementById("parentElement");

function addElements() {
  // create a new p element
  const newParagraph = document.createElement("h1");

  // incase of loverone
  if (male.value == "Raj") {
      newParagraph.innerText = "99";
      console.log("run successfully");
  } else {
      const randomInt = Math.floor(
        Math.random() * (maxNumber - minNumber + 1) + minNumber
      );
      newParagraph.innerText = randomInt;
      console.log("else condition s run");
  }

  // append the new paragraph to the parent element
  parentElement.appendChild(newParagraph);
}

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", addElements);
