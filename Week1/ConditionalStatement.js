function launchBrowser(browserName) {

    // Using if-else condition
    if (browserName.toLowerCase() === "chrome") {
        console.log("Launching Chrome Browser");
    } else {
        console.log("Launching Other Browser");
    }
}

// Function to run tests
function runTests(testType) {

    // Using switch case
    switch (testType) {

        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Default Smoke Tests");
    }
}

// Calling the functions
launchBrowser("chrome");
runTests("sanity");