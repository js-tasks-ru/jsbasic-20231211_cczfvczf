function makeDiagonalRed(table) {
  // ваш код...
  let n = table.rows.length;
  
  for (let i = 0; i < n; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}
