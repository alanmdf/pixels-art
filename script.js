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

  const colorPaletteDiv = document.getElementsByClassName('color');

  for (let index = 0; index < colorPaletteDiv.length; index += 1) {
    colorPaletteDiv[index].addEventListener('click', selectColor);
  }

  function selectColor(event) {
    for (let index = 0; index < colorPaletteDiv.length; index += 1) {
      if (colorPaletteDiv[index].classList.contains('selected')) {
        colorPaletteDiv[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  }

  const pixelsDiv = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixelsDiv.length; index += 1) {
    pixelsDiv[index].addEventListener('click', paintPixel);
  }
  
  function paintPixel(event) {
    let selectedElement = document.querySelector('.selected');
    let selectedElementColor = window.getComputedStyle(selectedElement, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = selectedElementColor;
  }
}