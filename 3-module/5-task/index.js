function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let newArr = arr.map(v => +v);
  for (let i = 0; i < newArr.length; i++) {
    if (isNaN(newArr[i])) {
      newArr.splice(i, 1);
    }
  }
  
  let reuslt = {
    min: Math.min(...newArr),
    max: Math.max(...newArr)
  };
  
  return reuslt;
}