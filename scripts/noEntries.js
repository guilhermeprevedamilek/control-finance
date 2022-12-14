import { openModal } from "./modal.js";

function createNoEntriesCard() {
  const divEmptyEntries = document.createElement("div");
  const pWithStrong = document.createElement("p");
  const strong = document.createElement("strong");
  const p = document.createElement("p");

  divEmptyEntries.classList.add("statement-entries__empty-entries");

  strong.innerText = "Nenhum valor cadastrado";
  p.innerText = "Registrar novo valor";

  pWithStrong.appendChild(strong);
  divEmptyEntries.append(pWithStrong, p);

  divEmptyEntries.addEventListener("click", () => {
    openModal();
  });

  return divEmptyEntries;
}

export function showNoEntriesCard() {
  const divStamenteEntries = document.querySelector(
    ".dashboard-statement__statement-entries"
  );

  divStamenteEntries.innerHTML = "";

  divStamenteEntries.appendChild(createNoEntriesCard());
}
