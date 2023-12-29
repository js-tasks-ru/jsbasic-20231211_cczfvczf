function highlight(table) {
  // ваш код...
  let n = table.rows.length;

  for (let i = 0; i < n; i++) {
    if (table.rows[i].cells[3].getAttribute('data-available') === 'true') {
      table.rows[i].classList.add('available');
    } else if (table.rows[i].cells[3].getAttribute('data-available') === 'false') {
      table.rows[i].classList.add('unavailable');
    } else {
      table.rows[i].setAttribute('hidden', 'hidden');
    }

    if (table.rows[i].cells[2].textContent == 'm') {
      table.rows[i].classList.add('male');
    } else if (table.rows[i].cells[2].textContent == 'f') {
      table.rows[i].classList.add('female');
    }

    if (table.rows[i].cells[1].textContent < 18) {
      table.rows[i].style = "text-decoration: line-through";
    }
  }
}
