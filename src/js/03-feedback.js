import throttle from 'lodash.throttle';
// const formEl = document.querySelector('.feedback-form');
// const STORAGE_KEY = 'feedback-form-state';
// const formData = { email: '', message: '' };
// const inputEl = document.querySelector('input');
// const textareaEl = document.querySelector('textarea');

// formEl.addEventListener('submit', onSubmitForm);
// formEl.addEventListener('input', throttle(onInput, 500));
// populateInputForm();

// function onSubmitForm(evt) {
//   evt.preventDefault();
//   console.log(populateInputForm());
//   formEl.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onInput(evt) {
//   formData.email === null ? '' : inputEl.value.trim();
//   formData.message === null ? '' : textareaEl.value.trim();
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function populateInputForm(evt) {
//   const parsedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   parsedFormData.email === null ? '' : (inputEl.value = parsedFormData.email);
//   parsedFormData.message === null
//     ? ''
//     : (textareaEl.value = parsedFormData.message);
//   return parsedFormData;
// }

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

populateFormInput();

function onFormSubmit(e) {
  e.preventDefault();
  if (textareaEl.value === '' || inputEl.value === '') {
    return;
  }
  console.log(populateFormInput());
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  formData.email = inputEl.value.trim();
  formData.message = textareaEl.value.trim();

  return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormInput() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData) {
    (inputEl.value = parsedData.email || ''),
      (textareaEl.value = parsedData.message || '');
  }
  return parsedData;
}
