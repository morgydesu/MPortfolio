const phrases = [
    "モルガンです！",
    "Morgan!",
    "a UX/UI designer.",
    "a strategic thinker.",
    "a digital innovator.",
    "a problem solver.",
    "a leader.",
    "a creative thinker.",
];

let currentIndex = 0;
const textElement = document.getElementById("rotating-text");

setInterval(() => {
    // Fade Out
    textElement.style.opacity = 0;

    setTimeout(() => {
        // Change Text
        currentIndex = (currentIndex + 1) % phrases.length;
        textElement.textContent = phrases[currentIndex];
        
        // Fade In
        textElement.style.opacity = 1;
    }, 500); 
}, 3000);

// Initialize Lucide icons if you are using them
lucide.createIcons();