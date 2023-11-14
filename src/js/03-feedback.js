import throttle from 'lodash.throttle';
// selecting elements
const emailInput = document.querySelector('input');
const messageArea = document.querySelector('textarea');
const form = document.querySelector('form') ;

// creating an object with empty properties
const storage = {
    email: '',
    message: '',  
};

//function which place data in inputs after reolad
populateForm();

//input listener to set items in local storage
form.addEventListener("input",throttle(onInput,500))
    
    
function onInput() {
    
    localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      ...storage,
      email: emailInput.value,
      message: messageArea.value,
    }))
};

function populateForm() {
    const savedFormData = localStorage.getItem('feedback-form-state');

    if (savedFormData) {
        const parsedFormData = JSON.parse(savedFormData);
        emailInput.value = parsedFormData.email;
        messageArea.value = parsedFormData.message;
    } else {
        emailInput.value = '';
        messageArea.value = '';
    }
};

//submit listener which handle data removing 
form.addEventListener("submit",onSubmit)

function onSubmit(evt) {
    evt.preventDefault();
  if (emailInput.value && messageArea.value) {
      form.reset();
      localStorage.removeItem('feedback-form-state');
      console.log(storage);
      storage.email = '';
      storage.message = '';
  } else {
    alert('Please fill all fields!');
  }
};
