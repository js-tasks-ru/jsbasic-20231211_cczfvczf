function checkSpam(str) {
  // ваш код...
  let answer = false;
  let newStr = str.toLowerCase();
  if(newStr.indexOf('1xbet') !== -1 || newStr.indexOf('xxx') !== -1) {
    answer = true;
  }
  return answer
}
