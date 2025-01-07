// Ensure the video plays automatically and loops
window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('giki-video');
  if (video) {
    video.play().catch(err => {
      console.error("Error playing video:", err);
    });
  }
});



menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetID = link.getAttribute('href').slice(1); // Get section ID
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
