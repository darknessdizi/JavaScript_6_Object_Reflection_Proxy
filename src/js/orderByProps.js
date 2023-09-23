function compareKey(a, b) {
  if (a.key > b.key) {
    return 1;
  }
  return -1;
}

function orderByProps(target, orderList) {
  const result = [];
  for (const key of orderList) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      const element = {};
      element.key = key;
      element.value = target[key];
      result.push(element);
    } else {
      throw Error(`Объект не имеет свойства ${key}`);
    }
  }
  const listElements = [];
  for (const key in target) {
    if (!orderList.includes(key)) {
      const element = {};
      element.key = key;
      element.value = target[key];
      listElements.push(element);
    }
  }
  listElements.sort(compareKey);
  result.push(...listElements);
  return result;
}

module.exports = {
  orderByProps,
};
