// script.js
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Check if the input value length is 1 and move focus to the next input
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // If backspace is pressed and the current input is empty, move focus to the previous input
        if (e.key === 'Backspace' && index > 0 && input.value === '') {
            inputs[index - 1].focus();
        }
    });
});