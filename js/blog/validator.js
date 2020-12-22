// declaration
const form = document.querySelector('form')
const userName = document.querySelector('#userName');
const password = document.querySelector('#userPass');

// events
form.addEventListener('submit', onClick);
userName.addEventListener('keyup', onUserNameKeyPress);
password.addEventListener('keyup', onPasswordKeyPress);

// methods
function userNameValidate() {
    if (userName.value === '') {
        userName.classList.add('is-invalid');
    } else {
        if (userName.value.length < 3) {
            userName.nextElementSibling.innerText = 'Please enter character more than 3';
            userName.classList.add('is-invalid');
        } else {
            userName.classList.remove('is-invalid');
        }
    }
}
function passwordValidate() {
    if (password.value === '') {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }
}

// handlers
function onUserNameKeyPress() {
    userNameValidate();
}
function onPasswordKeyPress() {
    passwordValidate();
}
function onClick(e) {
    e.preventDefault();

    userNameValidate();
    passwordValidate();

    if (userName.value === '' || password.value ===  '') {
        return;
    }

    console.log('Success');
}