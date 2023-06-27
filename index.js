const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    message: "Please enter up to 3 letters:",
    name: "text",
    validate: function (answer) {
      if (answer.length > 3) {
        return console.log("Please enter 3 letters maximum:");
      }
      return true;
    },
  },
  {
    type: "list",
    message: "What shape would you like?",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "list",
    message: "What background color would you like?",
    name: "color",
    choices: ["Light Blue", "Dusty Blue", "Purple", "Ash", "Pink"],
  },
  {
    type: "list",
    message: "What color text would you like?",
    name: "text_color",
    choices: ["White", "Black"],
  },
];

async function init() {
  const userInfo = await inquirer.prompt(questions);

  const userShape = userInfo.shape;

  const userBckClr = userInfo.color;
  let newBckClr = "";

  if (userBckClr == "Light Blue") {
    newBckClr = "#63B0CD";
  } else if (userBckClr == "Dusty Blue") {
    newBckClr = "#575D9E";
  } else if (userBckClr == "Purple") {
    newBckClr = "#613F75";
  } else if (userBckClr == "Ash") {
    newBckClr = "#B3D1CD";
  } else {
    newBckClr = "#F7B2B7";
  }

  const userTxtClr = userInfo.text_color;
  let newTxtClr = "";

  if (userTxtClr == "White") {
    newTxtClr = "#F2F2F2";
  } else {
    newTxtClr = "#333333";
  }

  if (userShape == "Circle") {
    const circle = new Circle(userInfo.text, newBckClr, newTxtClr);
    handleGenerateSVG(userInfo.text + "_logo.svg", circle.render());
  } else if (userShape == "Square") {
    const square = new Square(userInfo.text, newBckClr, newTxtClr);
    handleGenerateSVG(userInfo.text + "_logo.svg", square.render());
  } else {
    const triangle = new Triangle(userInfo.text, newBckClr, newTxtClr);
    handleGenerateSVG(userInfo.text + "_logo.svg", triangle.render());
  }
}

function handleGenerateSVG(title, chosenShape) {
  fs.writeFile(title, chosenShape, (err) => {
    if (err) {
      console.log("file print error");
    } else {
      console.log("Generated SVG in Parent Directory!");
    }
  });
}

init();
