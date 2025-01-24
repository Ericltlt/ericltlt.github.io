document.addEventListener('DOMContentLoaded', () => {
  const skillBubbles = document.querySelectorAll('.skill-bubble');
  
  skillBubbles.forEach((bubble, index) => {
    bubble.style.animationDelay = `${index * 0.2}s`;
  });

  // Optional: Scroll reveal animation
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Simulate the loading process
function simulateLoading() {
    const loadingBar = document.getElementById('loading-bar');
    const loadingText = document.getElementById('loading-text');
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    const greenLines = document.getElementById('green-lines');

    let width = 0; // Initial loading percentage

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval); // Stop the interval when loading reaches 100%
            loadingBar.style.width = '100%'; // Ensure the bar visually fills the container
            loadingText.textContent = `100%`; // Display 100% text
            setTimeout(() => {
                loadingScreen.classList.add('done'); // Hide the loading screen after a slight delay
                greenLines.style.opacity = 1; // Make green lines visible
                greenLines.style.visibility = 'visible'; // Make green lines visible
                content.classList.add('show'); // Show the main content
            }, 500); // Slight delay for smooth transition
        } else {
            width++;
            loadingBar.style.width = `${width}%`; // Update the width of the loading bar
            loadingText.textContent = `${width}%`; // Update the percentage text
        }
    }, 30); // Increase the width every 30ms
}

// Start the loading simulation when the page loads
window.onload = simulateLoading;

// Simulate the loading process and trigger space background visibility after loading
function simulateLoading() {
    const loadingBar = document.getElementById('loading-bar');
    const loadingText = document.getElementById('loading-text');
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    const spaceBackground = document.getElementById('space-background');

    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval); // Stop the loading animation
            loadingBar.style.width = '100%'; // Ensure the bar is full
            loadingText.textContent = `100%`; // Update text to show 100%
            setTimeout(() => {
                loadingScreen.classList.add('done'); // Hide the loading screen
                spaceBackground.classList.add('visible'); // Show the space background after loading
                content.classList.add('show'); // Show the main content
            }, 500); // Delay to allow loading transition
        } else {
            width++;
            loadingBar.style.width = `${width}%`; // Update loading bar width
            loadingText.textContent = `${width}%`; // Update loading text
        }
    }, 30); // Increase width every 30ms
}

// Start the loading simulation when the page loads
window.onload = simulateLoading;

// Trigger the fade-out of the loading screen
loadingScreen.classList.add('done');

// Trigger the fade-in of the content
content.classList.add('show');

// Make space animation visible
document.getElementById('space-animation').style.opacity = 1;
document.getElementById('space-animation').style.visibility = 'visible';

// Function to generate random stars
function generateStars() {
    const space = document.getElementById('space-animation');
    const numStars = 1000; // Increased number of stars to 1000

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random position
        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position

        // Add variation to the size and opacity for distant stars
        if (Math.random() < 0.7) {
            star.classList.add('star-distant');
        }

        space.appendChild(star);
    }
}
