document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('submitForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      handleFormSubmit();
  });

  function handleFormSubmit() {
      const nameInput = document.getElementById('name').value.trim();
      const emailInput = document.getElementById('email').value.trim();

      if (nameInput === '' || emailInput === '') {
          displayError('Please fill in all required fields.');
      } else {
          displaySuccess('Form submitted successfully!');
          // You can submit the form here if needed
      }
  }

  function displayError(message) {
      const errorElement = document.getElementById('error');
      errorElement.innerText = message;
  }

  function displaySuccess(message) {
      const successElement = document.getElementById('success');
      successElement.innerText = message;
  }
});
