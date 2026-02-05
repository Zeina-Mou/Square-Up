export const crudEngine = {
  create: (data, keys, defaultValues) => {
    const newItem = { id: Date.now() }; // توليد معرف فريد مؤقت
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
