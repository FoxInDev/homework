function goCheck(arr) {
  let mySet = new Set();
  let result = [];

  for (const obj of arr) {
    if (!mySet.has(obj.id)) {
      mySet.add(obj.id);
      result.push(obj);
    }
  }

  return result;
}