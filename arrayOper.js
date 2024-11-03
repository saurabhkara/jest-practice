const addToArray = (arr, item) => {
  arr.push(item);
  return arr;
};

const removeItem = (arr, item) => {
  const index = arr.indexOf(item);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return index;
};

module.exports = { addToArray, removeItem };
