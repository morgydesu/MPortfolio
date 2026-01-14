const phrases = [
    "モルガンです！",
    "Morgan!",
    "UX/UI designer.",
    "strategic thinker.",
    "digital innovator.",
    "problem solver.",
    "aspiring leader.",
    "creative thinker.",
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