//your JS code here. If required.
// Function to simulate a delay using async/await
function delayMessage(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to handle the button click event
async function handleDisplay() {
    // Get input values
    const message = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);

    // Validate input
    if (!message) {
        alert("Please enter a message.");
        return;
    }
    if (isNaN(delay) || delay < 0) {
        alert("Please enter a valid delay time (positive number).");
        return;
    }

    // Wait for the specified delay
    await delayMessage(delay);

    // Display the message in the output div
    document.getElementById("output").innerText = message;
}

// Attach event listener to the button
document.getElementById("btn").addEventListener("click", handleDisplay);
