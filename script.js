// Define toggleMenu function
function toggleMenu() {
    // Get .tabs element from DOM
    const tabs = document.querySelector('.tabs');
    
    // Toggle .active class on .tabs element
    tabs.classList.toggle('active');
}
// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the current section index
    let currentSection = 0;

    // Function to move to a specific section by adjusting the translateY property
    function moveToSection(sectionIndex) {
        const sections = document.querySelector('.sections');
        currentSection = sectionIndex;
        sections.style.transform = `translateY(-${sectionIndex * 100}vh)`;
    }

    // Listen for arrow key events to navigate between sections
    document.addEventListener('keydown', function (event) {
        // Move down if the down arrow is pressed and not at the last section
        if (event.key === 'ArrowDown' && currentSection < 2) {
            moveToSection(currentSection + 1);
        } 
        // Move up if the up arrow is pressed and not at the first section
        else if (event.key === 'ArrowUp' && currentSection > 0) {
            moveToSection(currentSection - 1);
        }
    });
});


// Text typing effect
const text1 = "The Mobile App to connect you with your helper.";
const text2 = "";

// Initialize character indices
let charIndex1 = 0;
let charIndex2 = 0;

// Function to simulate typing effect
function type() {
    // Select the element where the typing effect will be displayed
    const typingText = document.getElementById('typing-text');

    // Check if there are characters left in the first text
    if (charIndex1 < text1.length) {
        // Display characters of the first text
        typingText.innerHTML = `${text1.slice(0, charIndex1++)}`;
    } 
    // Check if there are characters left in the second text
    else if (charIndex2 < text2.length) {
        // Display characters of the second text with a line break
        typingText.innerHTML = `${text1}<br>${text2.slice(0, charIndex2++)}`;
    }

    // Continue typing if there are characters left in either text
    if (charIndex1 <= text1.length || charIndex2 <= text2.length) {
        // Set a timeout for the next character typing
        setTimeout(type, 100);
    }
}

// Start the typing effect
type();



// Tilting effect for the first mobile element
const mobile = document.getElementById('tilting-mobile');

// Event listener for mouse movement on the first mobile element
mobile.addEventListener('mousemove', (e) => {
    // Calculate the rotation angles based on mouse position
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    // Apply the rotation transformation to the first mobile element
    mobile.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Event listener for mouse leaving the first mobile element
mobile.addEventListener('mouseleave', () => {
    // Reset the rotation transformation when the mouse leaves
    mobile.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Tilting effect for the second mobile element
const mobile2 = document.getElementById('tilting-mobile2');

// Event listener for mouse movement on the second mobile element
mobile2.addEventListener('mousemove', (e) => {
    // Calculate the rotation angles based on mouse position
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    // Apply the rotation transformation to the second mobile element
    mobile2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Event listener for mouse leaving the second mobile element
mobile2.addEventListener('mouseleave', () => {
    // Reset the rotation transformation when the mouse leaves
    mobile2.style.transform = 'rotateY(0deg) rotateX(0deg)';
});