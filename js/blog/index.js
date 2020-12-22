
const form = document.querySelector('.myForm');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', onSubmit);
username.addEventListener('keyup', validateUserName);
password.addEventListener('keyup', validatePassword);
// Username Validation
function validateUserName() {
    if (username.value === '') {
        username.classList.add('is-invalid');
        username.classList.remove('is-valid');
        username.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    if (username.value.length < 3) {
        username.classList.add('is-invalid');
        username.classList.remove('is-valid');
        username.nextElementSibling.textContent = 'At least 3 char required';
        return false;
    }
    username.classList.add('is-valid');
    username.classList.remove('is-invalid');
    username.nextElementSibling.textContent = '';
    return true;
}

function validatePassword() {
    if (password.value === '') {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        password.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    if (password.value.length < 3) {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        password.nextElementSibling.textContent = 'Please enter more than 3 char';
        return false;
    }
    password.classList.add('is-valid');
    password.classList.remove('is-invalid');
    password.nextElementSibling.textContent = '';
    return true;
}

function isValid() {
    const isUserName = validateUserName();
    const isPassword = validatePassword();
    return isUserName && isPassword;
}



// On Submit function
function onSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
        return false;
    }

    console.log('call API');
}

