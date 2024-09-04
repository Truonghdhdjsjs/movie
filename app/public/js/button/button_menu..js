// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
  
    function updateSlide() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  
    document.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlide();
    });
  
    document.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlide();
    });
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide();
      });
    });
  
    // Optional: Automatic slide change
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlide();
    }, 5000); // Change slide every 5 seconds
  });
  