// File: 0-welcome.js

/**
 * Function to display a welcome message with the full name.
 * @param {string} firstName - The first name of the person.
 * @param {string} lastName - The last name of the person.
 */
function welcome(firstName, lastName) {
    // Concatenate the first name and last name
    let fullName = firstName + ' ' + lastName;

    /**
     * Function to display a welcome message with the full name.
     * This function is a closure.
     */
    function displayFullName() {
        // Display an alert with the welcome message
        alert('Welcome ' + fullName + '!');
    }

    // Call the displayFullName function
    displayFullName();
}

// Example usage:
// welcome('Holberton', 'School');
