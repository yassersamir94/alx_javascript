// Define the welcomeMessage function
function welcomeMessage(fullName) {
    // Return a function that alerts "Welcome" followed by the fullName argument
    return function() {
        alert('Welcome ' + fullName);
    };
}

// Create variables using the welcomeMessage function
var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');

// Call the functions and display alerts with the specified format
guillaume();
alex();
fred();
