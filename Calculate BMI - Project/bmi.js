const Kg_Per_Pound = 0.453592;
const Meters_Per_Inch = 0.0254;


const heightBox = document.querySelector('#height');
const weightBox = document.querySelector('#weight');
const answerSpan = document.querySelector('#answer');

heightBox.addEventListener('input', updateBMI);
weightBox.addEventListener('input', updateBMI);

function updateBMI() {
  const pounds = +weightBox.value;
  const inches = +heightBox.value;
  const kilograms = pounds * Kg_Per_Pound;
  const meters = inches * Meters_Per_Inch;
  const bmi = kilograms / (meters * meters);
  answerSpan.textContent = bmi.toFixed(2);
}

