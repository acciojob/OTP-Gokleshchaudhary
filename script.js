const inputs = document.querySelectorAll('.code');
const submitButton = document.getElementById('submit');
const timerDisplay = document.getElementById('timer');

let timer; // Timer variable
let timeLeft = 30; // 30 seconds countdown

// Function to handle input focus
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && input.value === '') {
            inputs[index - 1].focus();
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
            inputs[0].focus();
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