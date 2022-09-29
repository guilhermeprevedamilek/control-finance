/* Desenvolva sua lógica aqui */
[
  ...document.querySelectorAll(
    "#register-new-value, .statement-entries__empty-entries"
  ),
].forEach((tag) =>
  tag.addEventListener("click", () => {
    openModal();
  })
);

renderEntries();
