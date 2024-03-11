document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('emailForm');
  const errorElement = document.getElementById('error');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      const emailInput = document.getElementById('email').value;
      if (validateEmail(emailInput)) {
          form.submit();
      }
  });

  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
          errorElement.innerText = '';
          return true;
      } else {
          errorElement.innerText = 'Please enter a valid email address.';
          return false;
      }
  }
});
