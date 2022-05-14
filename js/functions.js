const valueInput =document.querySelector('.inp')
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const btnMultiplication = document.querySelector('.multiplication');
const btnDivision = document.querySelector('.division');
const btnReset = document.querySelector('.reset');
const btnEquals = document.querySelector('.equals');
const outputEl = document.querySelector('.output');

// let num;
let total = 0;

btnPlus.addEventListener('click', function () {
  const value = Number(valueInput.value);

  total += value;
  // outputEl.textContent = total;
  valueInput.value = '';
})

btnReset.addEventListener('click', function () {
  total = 0;
  outputEl.textContent = total;
});

btnEquals.addEventListener('click', function () {

  // total = num;

  outputEl.textContent = total;
  valueInput.value = '';
})
