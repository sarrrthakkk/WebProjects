const textElement = document.getElementById('text');
const texts = [
    "Hello, this is a typing effect!",
    "Now I'm deleting it...",
    "And typing new content!"
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let deleting = false;

function type() {
    const currentText = texts[currentTextIndex];
    
    if (!deleting) {
        if (currentCharIndex < currentText.length) {
            textElement.textContent += currentText.charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type, 100); // Typing speed
        } else {
            deleting = true; // Start deleting after typing is complete
            setTimeout(type, 1000); // Wait before starting to delete
        }
    } else {
        if (currentCharIndex > 0) {
            textElement.textContent = currentText.slice(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(type, 50); // Deleting speed
        } else {
            deleting = false; // Finished deleting
            currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
            currentCharIndex = 0; // Reset character index
            setTimeout(type, 500); // Wait before typing new text
        }
    }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', type);