const form = document.querySelector('.login-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '' || passwordValue === '') {
        return alert('All form fields must be filled in');
    }
    const info = {
        email: emailValue,
        password: passwordValue
    }
    console.log(info);
    form.reset();
})
