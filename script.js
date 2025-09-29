// Smooth scrolling handled by CSS scroll-behavior
// Handle contact form submission (demo only)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for your message! (Form demo only)");
  this.reset();
});
