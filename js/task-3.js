const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', (e) => {
    const trimmedValue = e.currentTarget.value.trim();
    if (trimmedValue === '') {
        nameOutput.textContent = 'Anonymus';
    } else {
        nameOutput.textContent = trimmedValue;
    }
})