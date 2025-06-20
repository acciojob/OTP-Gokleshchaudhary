document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');
    const submitButton = document.getElementById('submit');
    const timerDisplay = document.getElementById('timer');

    let timer; // Timer variable
    let timeLeft = 30; // 30 seconds countdown

    // Function to handle input focus
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1) { // Check if input has a value
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus(); // Move focus to the next input
                }
            }
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                if (input.value.length === 0 && index > 0) {
                    inputs[index - 1].focus(); // Move focus back if current input is empty
                }
            }
        });
    });

    // Timer function to count down
    function startTimer() {
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Time's up! Please try again.");
                // Reset the input fields
                inputs.forEach(input => input.value = '');
                inputs[0].focus(); // Focus on the first input
                timeLeft = 30; // Reset timer
            } else {
                timerDisplay.textContent = `Time left: ${timeLeft} seconds`;
                timeLeft--;
            }
        }, 1000);
    }

    // Start the timer when the page loads
    startTimer();

    // Handle form submission
    submitButton.addEventListener('click', () => {
        const otp = Array.from(inputs).map(input => input.value).join('');
        alert(`OTP Submitted: ${otp}`);
    });
});
describe('OTP Input Test', () => {
    it('Checking Forward Typing', () => {
        cy.visit('path/to/your/index.html'); // Update with the correct path
        cy.get('#code-1').type('1'); // Type into the first input
        cy.get('#code-2').should('be.focused'); // Check if the second input is focused
    });
});