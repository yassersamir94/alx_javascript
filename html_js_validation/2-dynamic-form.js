// 2-dynamic-form.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dynamicForm");
    const inputContainer = document.getElementById("inputContainer");
  
    // Function to generate input fields dynamically
    function generateInputFields(numFields) {
      inputContainer.innerHTML = ''; // Clear previous input fields
  
      for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = `field${i}`;
        inputField.placeholder = `Field ${i}`;
        inputContainer.appendChild(inputField);
      }
    }
  
    // Function to validate form before submission
    function validateForm(event) {
      event.preventDefault(); // Prevent form submission
  
      const inputs = inputContainer.querySelectorAll("input");
  
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
          alert("Please fill in all fields");
          return;
        }
      }
  
      // Submit the form if all fields are filled
      alert("Form submitted successfully!");
      form.submit();
    }
  
    // Event listener for dropdown change
    document.getElementById("numFields").addEventListener("change", function(event) {
      const selectedValue = parseInt(event.target.value);
      generateInputFields(selectedValue);
    });
  
    // Event listener for form submission
    form.addEventListener("submit", validateForm);
  });
  