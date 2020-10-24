let total = 0;

function validateInput() {
  return parseInt(inputDigit.value);
}

function calculate(operation) {
  let validatedInput, currentTotal;

  if (inputDigit.value !== "") {
    validatedInput = validateInput();

    currentTotal = total;
  } else {
    output("You must enter a number!", 0);

    return;
  }

  switch (operation) {
    case "SUM":
      total += validatedInput;

      logOperation(currentTotal, "ADDITION", validatedInput, total);

      output(createLabelOperation(currentTotal, "+", validatedInput), total);

      break;

    case "SUB":
      total -= validatedInput;

      logOperation(currentTotal, "SUBTRACTION", validatedInput, total);

      output(createLabelOperation(currentTotal, "-", validatedInput), total);

      break;

    case "MUL":
      total *= validatedInput;

      logOperation(currentTotal, "MULTIPLICATION", validatedInput, total);

      output(createLabelOperation(currentTotal, "*", validatedInput), total);

      break;

    case "DIV":
      total /= validatedInput;

      logOperation(currentTotal, "DIVISION", validatedInput, total);

      output(createLabelOperation(currentTotal, "/", validatedInput), total);

      break;
  }
}

function sum() {
  calculate("SUM");
}

function sub() {
  calculate("SUB");
}

function mul() {
  calculate("MUL");
}

function div() {
  calculate("DIV");
}
