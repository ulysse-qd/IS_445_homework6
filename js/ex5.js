const outputDiv = document.getElementById("output");
const table = document.createElement("table");

for (let i = 1; i <= 12; i++) {
  const row = document.createElement("tr");
  const numberCell = document.createElement("td");
  numberCell.textContent = i;
  numberCell.style.width = "25px"
  numberCell.style.textAlign = "center";
  numberCell.style.borderStyle = "double";
  numberCell.style.borderColor = "black";
  if (i % 4 === 0) {
    numberCell.style.backgroundColor = "lightblue";
  }
  row.appendChild(numberCell);
  table.appendChild(row);
}

outputDiv.appendChild(table);