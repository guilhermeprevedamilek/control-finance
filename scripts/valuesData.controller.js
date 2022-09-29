function registerData({ value, category: categoryID }) {
  categoryID = Number(categoryID);

  const formattedData = {
    id: insertedValues.at(-1).id + 1,
    value: Number(value.replaceAll(".", "").replaceAll(",", ".")),
    categoryID: categoryID - 1,
  };

  insertedValues.push(formattedData);
}
