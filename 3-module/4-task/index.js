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

// let user1 = {
//   balance: "$1,825.65",
//   picture: "https://placehold.it/32x32",
//   age: 21,
//   name: "Golden Branch",
//   gender: "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user2 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 25,
//   "name": "Pety",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let users = [user1, user2];
// console.log(showSalary(users, 30))