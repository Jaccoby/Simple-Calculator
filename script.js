// Get the display element
const display = document.querySelector('.display');

// Initialize the display value
let currentValue = '';

// Function to insert values into the display
function insert(value) {
  if (value === '=') {
    // Evaluate the expression and display the result
    try {
      currentValue = eval(currentValue);
    } catch (error) {
      currentValue = 'Error';
    }
  } else if (value === 'C') {
    // Clear the display
    currentValue = '';
  } else {
    // Insert the value into the display
    currentValue += value;
  }
  display.value = currentValue;
}

// Add event listener to the equal button
document.getElementById('result').addEventListener('click', () => {
  insert('=');
});

// Add event listener to the clear button
document.getElementById('clear').addEventListener('click', () => {
  insert('C');
});