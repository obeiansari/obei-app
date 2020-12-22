const form = document.querySelector('form');
const input = document.querySelector('#input');

form.addEventListener('submit', onClick);
input.addEventListener('keyup', itemValidator);

function itemValidator() {
    if (input.value === '') {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.nextElementSibling.textContent = 'This felid is required';
        return false;
    }
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    input.nextElementSibling.textContent = '';
    return true;
}
function isValidator() {
    const isItemValid = itemValidator();
    return isItemValid;

}
function onClick(e) {
    e.preventDefault()
    if (!isValidator()) {
        return false;
    }
    console.log('Add Item');

}