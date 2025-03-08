// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll("nav a");

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section id from the href attribute
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Highlight active section in navigation
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 200) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
});

// Add CSS for active nav link
const style = document.createElement("style");
style.textContent = `
    nav a.active {
        font-weight: bold;
    }
    nav a.active:after {
        width: 100%;
    }
`;
document.head.appendChild(style);
