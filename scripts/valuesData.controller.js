function createData({ value, category: categoryID }) {
  categoryID = Number(categoryID);

  const formattedData = {
    id: !!insertedValues.length ? insertedValues.at(-1).id + 1 : 1,
    value: Number(value.replaceAll(".", "").replaceAll(",", ".")),
    categoryID,
  };

  insertedValues.push(formattedData);
}

function deleteData(deleteId) {
  const deleteIndex = insertedValues.findIndex(({ id }) => id === deleteId);

  if (deleteIndex >= 0) {
    insertedValues.splice(deleteIndex, 1);
  }
}
