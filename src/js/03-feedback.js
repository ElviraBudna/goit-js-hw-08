import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const savedStorage = localStorage.getItem(STORAGE_KEY);
const parsedData = JSON.parse(savedStorage);

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(onInput, 500));
populateInputForm();

function onSubmitForm(evt) {
  evt.preventDefault();

  const email = inputEl.value;
  const message = textareaEl.value;

  email === '' || message === ''
    ? alert('Всі поля повинні бути заповнені!')
    : (console.log(formData),
      evt.currentTarget.reset(),
      localStorage.removeItem(STORAGE_KEY));
}

function onInput(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInputForm(evt) {
  if (savedStorage) {
    inputEl.value = parsedData.email;
    textareaEl.value = parsedData.message;
  }
}
