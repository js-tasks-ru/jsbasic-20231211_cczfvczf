function filterRange(arr, a, b) {
  // ваш код...
  let newArr = [];

  for (let el of arr) {
    if (el >= a && el <= b || el <= a && el >= b) {
      newArr.push(el);
    }
  }

  
  return newArr;
}
