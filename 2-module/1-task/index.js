function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == 'number' && Math.abs(salaries[key]) !== Infinity && !isNaN(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}