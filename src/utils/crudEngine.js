export const crudEngine = {
  create: (data, keys, defaultValues) => {
    const newItem = { id: Date.now() }; // temp id
    keys.forEach((key, i) => {
      newItem[key] = defaultValues[i];
    });
    return [...data, newItem];
  },

  update: (data, keys, newValues, index) => {
    const updatedData = [...data];

    const updatedItem = { ...updatedData[index] };

    keys.forEach((key, i) => {
      updatedItem[key] = newValues[i];
    });

    updatedData[index] = updatedItem;
    return updatedData;
  },

  delete: (data, index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    return updatedData;
  },
};
