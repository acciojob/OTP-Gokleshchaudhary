document.querySelectorAll('.code').forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < 5) {
            document.querySelectorAll('.code')[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value.length === 0 && index > 0) {
                document.querySelectorAll('.code')[index - 1].focus();
            }
        }
    });
});