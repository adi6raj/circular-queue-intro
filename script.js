// Scroll back to the top when "Back to Top" button is clicked
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  // Add the blinking effect to the text after 5 seconds
setTimeout(() => {
    const blinkerText = document.getElementById("blinker-text");
    if (blinkerText) {
      blinkerText.classList.add("blink");
    }
  }, 5000);

  // Function to observe when sections are in the viewport
function revealOnScroll() {
    const sections = document.querySelectorAll(".features-section, .other-section");
    
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
  
      if (sectionTop < viewportHeight - 100) { // Trigger 100px before entering the viewport
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener("scroll", revealOnScroll);
  document.querySelectorAll('.social-link').forEach((icon) => {
    icon.addEventListener('mouseover', () => {
      icon.querySelector('i').style.animation = 'none'; // Stop blinking on hover
    });
  
    icon.addEventListener('mouseleave', () => {
      icon.querySelector('i').style.animation = 'blink 2s infinite'; // Restart blinking
    });
  });
  