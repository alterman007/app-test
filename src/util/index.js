function generatorKey() {
  return Math.random().toString(36).substr(2) + Date.now();
}
function addUniqueKey(arr) {
  return arr.map((item) => {
    if (item.key) {
      return { ...item };
    }
    return ({
      ...item,
      key: generatorKey(),
    });
  });
}

export default addUniqueKey;
