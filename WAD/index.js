document.getElementById("btn").addEventListener("click", () => {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  console.log(input1, input2);
  var r1 = -1;
  var c1 = -1;
  var r2 = -1;
  var c2 = -1;
  for (var i = 0; i < input1.length; i++) {
    if (input1[i] != "#")
      if (r1 == -1) {
        r1 = input1[i];
      } else if (c1 == -1) {
        c1 = input1[i];
      }
  }

  for (var i = 0; i < input2.length; i++) {
    if (input2[i] != "#") {
      if (r2 == -1) {
        r2 = input2[i];
      } else if (c2 == -1) {
        c2 = input2[i];
      }
    }
  }

  console.log(r1, c1, r2, c2);

  if (r1 === c1 && r2 === c2) {
   
    const form = document.getElementById("inputForm")
    form.addEventListener("submit", formSubmit);

    function createTable(input) {
      // [rows, columns, startIndex]
      let table = [];
      for (let row = 0; row < input[0]; row++) {
        table.push([]);
      }

      let startHead = input[2];
      for (let col = 0; col < input[1]; col++) {
        let currentHead = startHead;
        table[0][col] = currentHead;
        startHead++;
        for (let row = 1; row < input[0]; row++) {
          table[row][col] = (row + 1) * currentHead;
        }
      }

      return table;
    }

    function multiply(table1, table2) {
      let table = [];
      for (let i = 0; i < table1.length; i++) {
        let row = [];
        for (let j = 0; j < table1[0].length; j++) {
          if (table1[i][j] != table2[i][j])
            row.push(table1[i][j] * table2[i][j]);
          else {
            row.push(table1[i][j]);
          }
        }
        table.push(row);
      }

      return table;
    }

    function displayTable(table, id) {
      const tableOutput = document.getElementById(id);

      let html = "";
      for (let i = 0; i < table.length; i++) {
        html += "<tr>";
        for (let j = 0; j < table[0].length; j++) {
          html += "<td>";
          html += table[i][j];
          html += "</td>";
        }
        html += "</tr>";
      }

      tableOutput.innerHTML = html;
    }

    function formSubmit(event) {
      event.preventDefault();

      input1 = input1.split("#");
      input2 = input2.split("#");

      let table1 = createTable(input1);
      let table2 = createTable(input2);
      console.table(table1);
      console.table(table2);

      let table3 = multiply(table1, table2);
      console.table(table3);

      // displaying tables
      displayTable(table1, "table1");
      displayTable(table2, "table2");
      displayTable(table3, "table3");
    }
  }
});
