// Get the elements
const input = document.getElementById('input');
const operators = document.getElementsByClassName('operator');
const numbers = document.getElementsByClassName('number');
const equalButton = document.getElementById('equaltoo');
const deleteButton = document.getElementById('delete');

// Add click event listeners to the operator buttons
for (let operator of operators) {
  operator.addEventListener('click', function() {
    input.value += operator.innerHTML;
  });
}

// Add click event listeners to the number buttons
for (let number of numbers) {
  number.addEventListener('click', function() {
    input.value += number.innerHTML;
  });
}

// Add click event listener to the equal button
equalButton.addEventListener('click', function() {
  try {
    const result = eval(input.value);
    input.value = Number.isFinite(result) ? result : 'Error';
  } catch (error) {
    input.value = 'Error';
  }
});

// Add click event listener to the delete button
deleteButton.addEventListener('click', function() {
  input.value = input.value.slice(0, -1)
});

// Add click event listener to the clear button
clear.addEventListener('click', function() {
  input.value =""
});