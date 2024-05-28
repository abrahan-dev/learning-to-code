let operand1 = null;
let operand2 = null;
let operator = null;
let history = [];

function caculate(operand1, operator, operand2) {
  switch (operator) {
    case "plus":
      return operand1 + operand2;
    case "minus":
      return operand1 - operand2;
    case "multiply":
      return operand1 * operand2;
    case "divide":
      if (operand2 === 0) {
        return "Error";
      }
      return operand1 / operand2;
  }
}

function handleNumber(number) {
    history.push(display.innerText);

    let isNumberBeforeOperator = !operator && !operand1;
    let isFirstNumberAfterOperator = operator && operand1 && !operand2;
    let isNumberAfterOperator = operator && operand1 && operand2;

    if (isFirstNumberAfterOperator) {
      display.innerText = number;
      operand2 = parseInt(display.innerText);
    } else {
      if (isNumberBeforeOperator || isNumberAfterOperator) {
        display.innerText =
          display.innerText === "0" ? number : display.innerText + number;
      }
    }
}

function handleAction(action) {
    switch (action) {
        case "c":
          display.innerText = "0";
          operand1 = null;
          operand2 = null;
          operator = null;
          history = [];
          break;
        case "equals":
          let canCalculate = operator && operand1 && operand2;
          if (!canCalculate) {
            break;
          }
          operand2 = parseInt(display.innerText);
          display.innerText = caculate(operand1, operator, operand2);
          break;
        case "back":
          display.innerText = history.pop() ?? "0";
          break;
        case "divide":
        case "multiply":
        case "minus":
        case "plus":
          operator = action;
          operand1 = parseInt(display.innerText);
          operand2 = null;
          break;
      }
}

function init() {
  document.querySelectorAll(".action").forEach((item) => {
    item.addEventListener("click", () => {
      let action = item.getAttribute("data-value");
      let isNumber = !isNaN(parseInt(action));
      isNumber && handleNumber(action);
      !isNumber && handleAction(action);
    });
  });
}

init();
