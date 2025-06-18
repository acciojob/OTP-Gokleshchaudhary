const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            if (input.value === '') {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        }
    });
});