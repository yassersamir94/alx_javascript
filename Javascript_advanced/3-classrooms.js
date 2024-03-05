// Define the createClassRoom function
function createClassRoom(numbersOfStudents) {
    // Define the studentSeat function
    function studentSeat(seat) {
        // Return a function that returns the seat number
        return function() {
            return seat;
        };
    }

    // Create and populate the students array
    var students = [];
    for (var i = 0; i < numbersOfStudents; i++) {
        var seatNumber = i + 1;
        students.push(studentSeat(seatNumber));
    }

    // Return the students array
    return students;
}

// Create a closure classRoom
var classRoom = createClassRoom(10);

// Test the classRoom array
console.log(classRoom[0]()); // Should return 1
console.log(classRoom[3]()); // Should return 4
console.log(classRoom[9]()); // Should return 10
