/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = rows;
  }

  set elem(rows) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>`;
    table.prepend(thead);

    let tbody = document.createElement("tbody");
    table.append(tbody);
    this.rows.forEach(function (item) {
      let row = document.createElement("tr");
      row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.salary}</td>
      <td>${item.city}</td>
      <td><button>X</button></td>
      `;
      tbody.append(row);
    });

    table.onclick = function (event) {
      let target = event.target;
      if (target.tagName != "BUTTON") return;

      target.closest("tr").remove();
    };

    this.table = table;
    return table;
  }

  get elem() {
    return this.table;
  }
}
