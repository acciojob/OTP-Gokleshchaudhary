// script.js
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
		describe('OTP Input Test', () => {
    it('Checking Forward Typing', () => {
        cy.visit('path_to_your_index.html'); // Apne HTML file ka path yahan daalo
        cy.get('#code-1').type('1').should('have.value', '1');
        cy.get('#code-2').should('have.focus'); // Check if focus is on code-2
    });
});
    });
});