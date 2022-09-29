function formatNumber(number) {
  return number
    .replace(/\D/g, "")
    .replace(/^0+(?!$)/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatCurrency({ type: eventType }, input) {
  if (input.value === "") {
    return;
  }

  const originalLength = input.value.length;
  let cursorPosition = input.selectionStart;

  if (input.value.indexOf(",") >= 0) {
    const decimalPosition = input.value.indexOf(",");

    let leftSide = input.value.substring(0, decimalPosition);
    let rightSide = input.value.substring(decimalPosition);

    leftSide = formatNumber(leftSide);
    rightSide = formatNumber(rightSide);

    if (eventType === "blur") {
      rightSide += "00";
    }

    rightSide = rightSide.substring(0, 2);

    input.value = leftSide + "," + rightSide;
  } else {
    input.value = formatNumber(input.value);
    input.value = input.value;

    if (eventType === "blur") {
      input.value += ",00";
    }
  }

  const updatedLength = input.value.length;

  cursorPosition = updatedLength - originalLength + cursorPosition;

  input.setSelectionRange(cursorPosition, cursorPosition);
}
