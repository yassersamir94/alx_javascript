document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('dynamicForm');
  const inputContainer = document.getElementById('inputContainer');
  const numFieldsSelect = document.getElementById('numFields');

  // Generate input fields initially based on the default selection
  generateInputFields(parseInt(numFieldsSelect.value));

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
          form.submit();
      }
  });

  numFieldsSelect.addEventListener('change', function () {
      const numFields = parseInt(this.value);
      generateInputFields(numFields);
  });

  function generateInputFields(numFields) {
      inputContainer.innerHTML = ''; // Clear previous fields
      for (let i = 1; i <= numFields; i++) {
          const input = document.createElement('input');
          input.type = 'text';
          input.name = 'field' + i;
          input.placeholder = 'Field ' + i;
          inputContainer.appendChild(input);
      }
  }

  function validateForm() {
      const inputs = inputContainer.getElementsByTagName('input');
      for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].value.trim() === '') {
              alert('Please fill in all fields');
              return false;
          }
      }
      return true;
  }
});
