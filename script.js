let form = document.querySelector('.form'),
    email = form.querySelector('input'),
    msg = form.querySelector('small');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value.trim() === '') {
        form.className = 'form error'
        msg.innerText = `Email cannot be empty`
    } else if (!validateEmail(email.value.trim())) {
        form.className = 'form error'
        msg.innerText = `Please provide a valid email`
    } else {
        form.className = 'form success'
        msg.innerText = `You're on the list !`
    }
})

// RegEx copied from StackOverflow //
function validateEmail(email) {
    let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase());
}