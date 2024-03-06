// Get all input containers
const inlineContainers = document.querySelectorAll('.inline-container');

// Loop through each container
inlineContainers.forEach((container, index) => {
  // Check if index is odd or even
  if (index % 2 === 0) { // Even
    // Add event listener to even button
    container.querySelector('button').addEventListener('click', () => {
      alert('Even button clicked');
    });
  } else { // Odd
    // Add event listener to odd button
    container.querySelector('button').addEventListener('click', () => {
      alert('Odd button clicked');
    });
  }
});
