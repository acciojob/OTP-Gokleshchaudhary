const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        console.log("Input value: ", e.target.value);
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
            console.log("Focused on: ", inputs[index + 1].id);
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && input.value === '') {
            inputs[index - 1].focus();
            console.log("Focused back on: ", inputs[index - 1].id);
        }
    });
});
Cypress.config('defaultCommandTimeout', 10000); // Increase timeout to 10 seconds