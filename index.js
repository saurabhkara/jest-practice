const {
  add,
  substraction,
  multiplcation,
  division,
} = require("./mathUtils.js");

function multiply(a, b) {
  return a * b;
}

//Async operations
const fetchData = (isFailed = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFailed) {
        reject("Rejected, error occured");
      } else {
        resolve("Resolved");
      }
    });
  });
};

//Mocking

function calculator(a, b, operation) {
  if (operation === "addition") {
    return add(a, b);
  } else if (operation === "substraction") {
    return substraction(a, b);
  } else if (operation === "division") {
    return division(a, b);
  } else {
    return multiplcation(a, b);
  }
}

// example for spying on jest.

function calledOnce() {
  console.log("called Once");
}
module.exports = { multiply, fetchData, calculator, calledOnce };
