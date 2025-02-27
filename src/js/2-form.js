let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-stateg';
const form = document.querySelector('.feedback-form');

populateForm();

form.addEventListener('submit', onSubmit);
form.addEventListener('input', onInput);

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted Data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}
