import throttle from 'lodash.throttle';
const getForm = document.querySelector('.feedback-form');
const LOCALE_STORAGE_FORM_KEY = 'feedback-form-state';
const getLocaleStorageFormData = JSON.parse(
  localStorage.getItem(LOCALE_STORAGE_FORM_KEY)
);
console.log(getLocaleStorageFormData);
let email;
let message;

setValuesToForm(getLocaleStorageFormData);

getForm.addEventListener('input', throttle(inputHandler, 500));
getForm.addEventListener('submit', submitHandler);

function inputHandler(evt) {
  if (evt.target.name === 'email') {
    email = evt.target.value;
  } else if (evt.target.name === 'message') {
    message = evt.target.value;
  }
  localStorage.setItem(
    LOCALE_STORAGE_FORM_KEY,
    JSON.stringify({ email, message })
  );
}
function submitHandler(evt) {
  console.log({ email, message });
  evt.preventDefault();
  getForm.reset();
  const getTextArea = document.querySelector('textarea');
  getTextArea.value = '';
  localStorage.removeItem(LOCALE_STORAGE_FORM_KEY);
}

function setValuesToForm(data) {
  try {
    email = getLocaleStorageFormData.email;
    getForm.elements.email.value = email;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
  try {
    message = getLocaleStorageFormData.message;
    getForm.elements.message.textContent = message;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
