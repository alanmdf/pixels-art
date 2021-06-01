window.onload = function() {
  const table = document.getElementById('pixel-board');
  const blackPixel = document.querySelector('.black-pixel')
  blackPixel.className += ' selected';  

  function insertTableRows() {
    for (let index = 0; index < 5; index += 1) {
      let tableRow = document.createElement('tr');
      table.appendChild(tableRow);
      for (let index2 = 0; index2 < 5; index2 += 1) {
        let tableCell = document.createElement('td');
        tableCell.className = 'pixel';
        tableCell.style.backgroundColor = 'white';
        tableRow.appendChild(tableCell);        
      }
    }
  }
  insertTableRows();
}