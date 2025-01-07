// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a");
  
    menuLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
  
        const targetID = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetID);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 40, // Adjust for header height
            behavior: "smooth",
          });
        }
      });
    });
  });
  
  // Interactive Image Zoom Effect
  const galleryImages = document.querySelectorAll(".gallery-img");
  
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      // Toggle the 'zoomed' class for zoom effect
      img.classList.toggle("zoomed");
  
      // Remove zoomed class from other images
      galleryImages.forEach(otherImg => {
        if (otherImg !== img) {
          otherImg.classList.remove("zoomed");
        }
      });
    });
  });
  
  // Inject dynamic CSS for zoomed effect
  const zoomStyle = document.createElement("style");
  zoomStyle.textContent = `
    .zoomed {
      transform: scale(1.5); /* Zoom in */
      transition: transform 0.5s ease;
      z-index: 10;
      position: relative;
    }
  `;
  document.head.appendChild(zoomStyle);
  
  // Highlight Section Titles on Scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".gallery-section");
    const scrollPosition = window.scrollY;
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200; // Offset for better visibility
      const sectionBottom = sectionTop + section.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        section.querySelector("h2").classList.add("highlight-title");
      } else {
        section.querySelector("h2").classList.remove("highlight-title");
      }
    });
  });
  
  // Inject dynamic CSS for highlighted titles
  const highlightStyle = document.createElement("style");
  highlightStyle.textContent = `
    .highlight-title {
      color: #ff8000; /* Highlight color */
      transition: color 0.3s ease;
    }
  `;
  document.head.appendChild(highlightStyle);
  