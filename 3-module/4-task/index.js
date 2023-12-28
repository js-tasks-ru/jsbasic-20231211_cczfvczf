function showSalary(users, age) {
  // ваш код...
  let newArr = [];
  for (let user of users) {
    if (user.age <= age) {
      newUser = user.name + ', ' + user.balance;
      newArr.push(newUser);
    }
    continue;
  }
  return newArr.join('\n');
}
