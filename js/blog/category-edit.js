const form = document.querySelector('form');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt')
const metaTitle = document.querySelector('#metaTitle');
const metaDescription = document.querySelector('#metaDescription');
const metaKeyword = document.querySelector('#metaKeyword');

form.addEventListener('submit', onSubmit);
title.addEventListener('keyup', titleValidator);
excerpt.addEventListener('keyup', excerptValidator);
metaTitle.addEventListener('keyup', metaTitleValidator);
metaDescription.addEventListener('keyup', metaDescriptionValidator);
metaKeyword.addEventListener('keyup', metaKeywordValidator);

function titleValidator() {
    if (title.value === '') {
        title.classList.add('is-invalid');
        title.classList.remove('is-valid');
        title.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    title.classList.add('is-valid');
    title.classList.remove('is-invalid');
    title.nextElementSibling.textContent = '';
    return true;

}
function excerptValidator() {
    if (excerpt.value === '') {
        excerpt.classList.add('is-invalid');
        excerpt.classList.remove('is-valid');
        excerpt.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    excerpt.classList.add('is-valid');
    excerpt.classList.remove('is-invalid');
    excerpt.nextElementSibling.textContent = '';
    return true; 
}
function metaTitleValidator() {
    if (metaTitle.value === '') {
        metaTitle.classList.add('is-invalid');
        metaTitle.classList.remove('is-valid');
        metaTitle.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    metaTitle.classList.add('is-valid');
    metaTitle.classList.remove('is-invalid');
    metaTitle.nextElementSibling.textContent = '';
    return true;
}

function metaDescriptionValidator() {
    if (metaDescription.value === '') {
        metaDescription.classList.add('is-invalid');
        metaDescription.classList.remove('is-valid');
        metaDescription.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    metaDescription.classList.add('is-valid');
    metaDescription.classList.remove('is-invalid');
    metaDescription.nextElementSibling.textContent = '';
    return true;
}

function metaKeywordValidator() {
    if (metaKeyword.value === '') {
        metaKeyword.classList.add('is-invalid');
        metaKeyword.classList.remove('is-valid');
        metaKeyword.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    metaKeyword.classList.add('is-valid');
    metaKeyword.classList.remove('is-invalid');
    metaKeyword.nextElementSibling.textContent = '';
    return true;
}

function isValidator() {
    const isTitle = titleValidator();
    const isExcpert = excerptValidator();
    const isMetaTitle = metaTitleValidator();
    const isMetaDescription = metaDescriptionValidator();
    const isMetaKeyword = metaKeywordValidator();
    return isTitle && isMetaTitle && isExcpert && isMetaDescription && isMetaKeyword;

}

function onSubmit(e) {
    e.preventDefault();
    if (!isValidator()) {
        return;
    }
    console.log('call API');
}
