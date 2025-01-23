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