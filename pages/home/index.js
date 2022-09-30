/* Desenvolva sua lógica aqui */
document.querySelector("#register-new-value").addEventListener("click", () => {
  openModal();
});

[
  ...document.querySelectorAll(".dashboard-header__dashboard-filters input"),
].forEach((tag) =>
  tag.addEventListener("change", (event) => {
    renderEntries(tag.value);
  })
);

renderEntries();
