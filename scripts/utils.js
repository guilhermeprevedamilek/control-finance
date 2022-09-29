function formatNumber(n) {
  return Number(
    Number(n.replace(/[^\d\n,]/g, "").replace(",", ".")).toFixed(2)
  ).toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}

function formatCurrency(input) {
  const cursorPosition = input.selectionStart;

  input.value = formatNumber(input.value);

  input.selectionEnd = cursorPosition;
}
