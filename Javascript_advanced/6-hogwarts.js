// Define the studentHogwarts factory function
function createStudentHogwarts() {
    // Private variables
    var privateScore = 0;

    // Private method
    function changeScoreBy(points) {
        privateScore += points;
    }

    // Return an object containing public methods
    return {
        setName: function(newName) {
            this.name = newName;
        },
        rewardStudent: function() {
            changeScoreBy.call(this, 1);
        },
        penalizeStudent: function() {
            changeScoreBy.call(this, -1);
        },
        getScore: function() {
            return this.name + ': ' + privateScore;
        }
    };
}

// Create instances of studentHogwarts
var harry = createStudentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

var draco = createStudentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log the name and score to the console
console.log(harry.getScore()); // Should display "Harry: 4"
console.log(draco.getScore()); // Should display "Draco: -2"
