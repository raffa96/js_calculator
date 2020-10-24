const inputDigit = document.getElementById("input-digit");

const logs = [];

const operationsNumber = document.getElementById("operations-number");

const btnSum = document.getElementById("btn-sum");

const btnSub = document.getElementById("btn-sub");

const btnMul = document.getElementById("btn-mul");

const btnDiv = document.getElementById("btn-div");

const lblOperation = document.getElementById("lbl-operation");

const lblResult = document.getElementById("lbl-result");

btnSum.addEventListener("click", sum);

btnSub.addEventListener("click", sub);

btnMul.addEventListener("click", mul);

btnDiv.addEventListener("click", div);

function logOperation(prevNumber, operation, currentNumber, total) {
  let log = { prevNumber, operation, currentNumber, total };

  logs.push(log);

  operationsNumber.innerText = logs.length;
}

function createLabelOperation(prevDigit, operator, nextDigit) {
  return `${prevDigit} ${operator} ${nextDigit}`;
}

function output(operation, result) {
  lblOperation.innerText = operation;

  lblResult.innerText = "RESULT: " + result;
}
