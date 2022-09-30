function createEntryCard({ id, value, categoryID }) {
  const divStatementEntry = document.createElement("div");
  const spanValue = document.createElement("span");
  const divInformations = document.createElement("div");
  const spanTag = document.createElement("span");
  const button = document.createElement("button");
  const picture = document.createElement("picture");
  const i = document.createElement("i");

  divStatementEntry.id = id;

  divStatementEntry.classList.add("statement-entries__statement-entry");
  spanValue.classList.add("statement-entry__value");
  divInformations.classList.add("statement-entry__informations");
  spanTag.classList.add("statement-entry__tag");
  button.classList.add("button", "icon");
  i.classList.add("fa-solid", "fa-trash");

  spanValue.innerText = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  spanTag.innerText = valuesCategory[categoryID - 1];

  button.addEventListener("click", () => {
    deleteData(id);
    renderEntries();
  });

  picture.appendChild(i);
  button.appendChild(picture);
  divInformations.append(spanTag, button);
  divStatementEntry.append(spanValue, divInformations);

  return divStatementEntry;
}

function renderEntries(filterID = "all") {
  const filteredData =
    filterID === "all"
      ? insertedValues
      : insertedValues.filter(
          ({ categoryID }) => Number(filterID) === categoryID
        );

  if (!!filteredData.length) {
    const statementEntries = document.querySelector(
      ".dashboard-statement__statement-entries"
    );

    statementEntries.innerHTML = "";

    filteredData.forEach((value) => {
      statementEntries.append(createEntryCard(value));
    });
  } else {
    showNoEntriesCard();
  }

  updateSummary(filteredData);
}

function updateSummary(dataArray) {
  const statementSummary = document.querySelector(".statement-summary__total");

  const reducedValues = dataArray.reduce(
    (acc, current) => acc + current.value,
    0
  );

  statementSummary.innerText = reducedValues.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
