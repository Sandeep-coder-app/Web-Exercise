const input = document.getElementById('numberInput')
const result = document.getElementById('result')
const button = document.getElementById('submit')

button.addEventListener('click', () => {

    // Convert input value to a number using parseInt or ParseFloat
    
    const inputValue = parseInt(input.value);

    if (inputValue % 2 == 0) {
        result.textContent = 'even'
        alert('Even')
        console.log('even');
    } else {
        result.textContent = 'odd'
        alert('odd')
        console.log('odd');
    }
})