/* Desenvolva sua lógica aqui */
function createModal() {
  const sectionModalWraper = document.createElement("section");
  const divModalBox = document.createElement("div");
  const divModalContent = document.createElement("div");
  const buttonCloseButton = document.createElement("button");
  const h3Title = document.createElement("h3");
  const pDescription = document.createElement("p");
  const formModalForm = document.createElement("form");
  const divTotalInput = document.createElement("div");
  const labelLabel = document.createElement("label");
  const divInputWraper = document.createElement("div");
  const spanPrefix = document.createElement("span");
  const inputInput = document.createElement("input");
  const divCategorySelect = document.createElement("div");
  const pText = document.createElement("p");
  const divCategoryButtons = document.createElement("div");
  const divButtons = document.createElement("div");
  const buttonCancel = document.createElement("button");
  const buttonSubmit = document.createElement("button");

  sectionModalWraper.classList.add("modal-wraper", "fadeIn");
  divModalBox.classList.add("modal-wraper__modal-box", "slideInDown");
  divModalContent.classList.add("modal-box__modal-content");
  buttonCloseButton.classList.add(
    "modal-content__close-button",
    "button",
    "greylow"
  );
  h3Title.classList.add("modal-content__title");
  pDescription.classList.add("modal-content__description");
  formModalForm.classList.add("modal-content__modal-form");
  divTotalInput.classList.add("modal-form__total-input");
  labelLabel.classList.add("total-input__label");
  divInputWraper.classList.add("total-input__input-wraper");
  spanPrefix.classList.add("input-wraper__prefix");
  inputInput.classList.add("input-wraper__input");
  divCategorySelect.classList.add("modal-form__category-select");
  pText.classList.add("category-select__text");
  divCategoryButtons.classList.add("category-select__category-buttons");
  divButtons.classList.add("modal-form__buttons");
  buttonCancel.classList.add("button", "greylow");
  buttonSubmit.classList.add("button", "primary");

  buttonCloseButton.innerText = "X";
  h3Title.innerText = "Registro de valor";
  pDescription.innerText =
    "Digite o valor e em seguida aperte no botão referente ao tipo do valor";
  labelLabel.innerText = "Valor";
  spanPrefix.innerText = "R$";
  pText.innerText = "Tipo de valor";
  buttonCancel.innerText = "Cancelar";
  buttonSubmit.innerText = "Inserir valor";

  inputInput.type = "text";
  buttonSubmit.type = "submit";

  inputInput.name = "value";

  inputInput.id = "value";

  inputInput.placeholder = "00,00";

  labelLabel.htmlFor = "value";

  [
    { categoryID: 1, categoryName: "Entrada", tagId: "in-category" },
    { categoryID: 2, categoryName: "Saída", tagId: "out-category" },
  ].forEach(({ categoryID, categoryName, tagId }) => {
    const labelCategory = document.createElement("label");
    const inputCategory = document.createElement("input");

    labelCategory.classList.add("button", "outline");
    inputCategory.classList.add("radio-filter");

    labelCategory.innerText = categoryName;

    inputCategory.type = "radio";

    inputCategory.name = "category";

    inputCategory.id = tagId;

    inputCategory.value = categoryID;

    inputCategory.checked = true;

    labelCategory.htmlFor = tagId;

    labelCategory.appendChild(inputCategory);
    divCategoryButtons.append(labelCategory);
  });

  [buttonCloseButton, buttonCancel].forEach((button) =>
    button.addEventListener("click", (event) => {
      event.preventDefault();

      closeModal(sectionModalWraper, divModalBox);
    })
  );

  divButtons.append(buttonCancel, buttonSubmit);
  divCategorySelect.append(pText, divCategoryButtons);
  divInputWraper.append(spanPrefix, inputInput);
  divTotalInput.append(labelLabel, divInputWraper);
  formModalForm.append(divTotalInput, divCategorySelect, divButtons);
  divModalContent.append(
    buttonCloseButton,
    h3Title,
    pDescription,
    formModalForm
  );
  divModalBox.appendChild(divModalContent);
  sectionModalWraper.appendChild(divModalBox);

  return sectionModalWraper;
}

function openModal() {
  document.body.append(createModal());
}

function closeModal(sectionModalWraper, divModalBox) {
  sectionModalWraper.classList.remove("fadeIn");
  sectionModalWraper.classList.add("fadeOut");

  divModalBox.classList.remove("slideInDown");
  divModalBox.classList.add("slideOutDown");

  sectionModalWraper.addEventListener("animationend", () => {
    sectionModalWraper.remove();
  });
}
