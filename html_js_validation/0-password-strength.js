document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('passwordForm');
  const errorElement = document.getElementById('error');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      const passwordInput = document.getElementById('password').value;
      if (validatePassword(passwordInput)) {
          form.submit();
      }
  });

  function validatePassword(password) {
      const errors = [];

      if (password.length < 8) {
          errors.push("Password must be at least 8 characters long.");
      }
      if (!password.match(/[A-Z]/)) {
          errors.push("Password must contain at least one uppercase letter.");
      }
      if (!password.match(/[a-z]/)) {
          errors.push("Password must contain at least one lowercase letter.");
      }
      if (!password.match(/[0-9]/)) {
          errors.push("Password must contain at least one numeric digit.");
      }
      if (!password.match(/[!@#$%^&*]/)) {
          errors.push("Password must contain at least one special character (!@#$%^&*).");
      }

      if (errors.length > 0) {
          errorElement.innerText = errors.join('\n');
          return false;
      }

      errorElement.innerText = '';
      return true;
  }
});
