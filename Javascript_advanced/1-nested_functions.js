// Define globalVariable
var globalVariable = "Welcome";

// Define outer function
function outer() {
    // Alert the content of globalVariable
    alert(globalVariable);

    // Define course variable
    var course = "Holberton";

    // Define inner function
    function inner() {
        // Alert the content of globalVariable and course concatenated
        alert(globalVariable + ' ' + course);

        // Define exclamation variable
        var exclamation = "!";

        // Define inception function
        function inception() {
            // Alert the content of globalVariable, course, and exclamation concatenated
            alert(globalVariable + ' ' + course + exclamation);
        }

        // Call inception function
        inception();
    }

    // Call inner function
    inner();
}

// Call outer function
outer();
