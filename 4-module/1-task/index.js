function makeFriendsList(friends) {
  // ваш код...
  
  let ul = document.createElement('ul');
  let li = "";

  for (let friend of friends) {
    li += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }

  ul.innerHTML = li;
  return ul;
}
