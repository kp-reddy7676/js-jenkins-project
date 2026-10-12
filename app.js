const programmerName = "Alex";
let codingHours = 5;

function evaluateProgress(hours) {
    if (hours >= 6) {
        return "Excellent progress for today!";
    } else if (hours >= 3) {
        return "Good job! Keep building momentum.";
    } else {
        return "A little more effort will go a long way!";
    }
}

const coreLanguages = ["HTML", "CSS", "JavaScript"];

console.log(`Hello, ${programmerName}! Welcome to your JavaScript journey.`);
console.log(`Status: ${evaluateProgress(codingHours)}`);

console.log("\nLanguages you are practicing:");
coreLanguages.forEach((language, index) => {
    console.log(`${index + 1}. ${language}`);
});
