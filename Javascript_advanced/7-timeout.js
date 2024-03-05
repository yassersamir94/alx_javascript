console.log('Start of the execution queue');

// Define a function to simulate asynchronous behavior
function simulateAsyncTask() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}

// Log numbers from 1 to 100 using a loop
(async function() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
        await simulateAsyncTask(); // Await to simulate asynchronous behavior
    }
    console.log('End of the loop printing');

    // Execute the final code block after the loop completes
    setTimeout(function() {
        console.log('Final code block to be executed');
    }, 0);
})();
