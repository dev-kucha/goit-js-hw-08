var throttle = require('lodash.throttle');
const formRef = document.querySelector('.feedback-form');
const formElements = formRef.elements;
let formData = {
  email: '',
  message: '',
};
formRef.addEventListener('input', onDataInput);
formRef.addEventListener('submit', onFormSubmit);

// try {
//   const startfeedbackFormState = localStorage.getItem('feedback-form-state');
//   formData = JSON.parse(startfeedbackFormState);
//   formElements.email.value = formData.email;
//   formElements.message.value = formData.message;
// } catch (error) {
//   console.error('Set state error: ', error.message);
// }

const startfeedbackFormState = localStorage.getItem('feedback-form-state');
if (startfeedbackFormState) {
  formData = JSON.parse(startfeedbackFormState);
  formElements.email.value = formData.email;
  formElements.message.value = formData.message;
}

function onDataInput(evt) {
  throttleSaveFormData();
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.table(formData);
  formRef.reset();
  saveFormData();
}

function saveFormData() {
  formData.email = formElements.email.value;
  formData.message = formElements.message.value;
  const feedbackFormState = JSON.stringify(formData);
  try {
    localStorage.setItem('feedback-form-state', feedbackFormState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

const throttleSaveFormData = throttle(saveFormData, 500);
