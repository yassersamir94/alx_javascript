// Define the welcome function
function welcome(firstName, lastName) {
    // Construct the fullName variable
    var fullName = firstName + ' ' + lastName;

    // Define the displayFullName function
    function displayFullName() {
        // Display an alert with the welcome message
        alert('Welcome ' + fullName + '!');
    }

    // Call the displayFullName function
    displayFullName();
}
