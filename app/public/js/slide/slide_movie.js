document.addEventListener("DOMContentLoaded", function() {
    const carouselTrack = document.querySelector(".Featured_Movies");
    const slides = document.querySelectorAll(".Featured_Movies_All");
    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;
  
    // Clone the first and last slides
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[slideCount - 1].cloneNode(true);
  
    // Append clones to the track
    carouselTrack.appendChild(firstSlide);
    carouselTrack.insertBefore(lastSlide, slides[0]);
  
    let currentIndex = 1; // Start from the first real slide
  
    function updateCarousel() {
      carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    function moveToNextSlide() {
      if (currentIndex >= slideCount) {
        // Move back to the first real slide
        carouselTrack.style.transition = 'none';
        currentIndex = 1;
        updateCarousel();
        // Force a reflow to restart the transition
        carouselTrack.offsetHeight; 
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
      } else {
        currentIndex++;
        updateCarousel();
      }
    }
  
    function moveToPrevSlide() {
      if (currentIndex <= 0) {
        // Move to the last real slide
        carouselTrack.style.transition = 'none';
        currentIndex = slideCount - 1;
        updateCarousel();
        // Force a reflow to restart the transition
        carouselTrack.offsetHeight;
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
      } else {
        currentIndex--;
        updateCarousel();
      }
    }
  
    // Event listeners for navigation buttons
    document.querySelector(".next").addEventListener("click", moveToNextSlide);
    document.querySelector(".prev").addEventListener("click", moveToPrevSlide);
  
    // Optional: Automatic slide change
    setInterval(moveToNextSlide, 6000); // Change slide every 5 seconds
  });
  


// script.js
// document.addEventListener("DOMContentLoaded", function() {
//     const carouselTrack = document.querySelector(".Featured_Movies");
//     const slideCount = 3; // Số lượng slide gốc
//     const slides = [];
  
//     // Tạo nội dung slide (thay thế bằng cách tải thực tế hoặc thay đổi số lượng)
//     for (let i = 1; i <= slideCount; i++) {
//       const slide = document.createElement('div');
//       slide.classList.add('.Featured_Movies_All');
//       slide.innerHTML = `
//              <a href=""> <img src="https://photos.q00gle.com/storage/files/images-2021/images-movies/09/660a1500a426a.jpg" alt="" title="" loading="lazy" class="Movies_Content_img"></a>
//                                         <div class="Movies_Content_category">
//                                             <span>full</span>
//                                         </div>
//                                         <div class="Movies_Content_number_of_episodes">
//                                             <span>phụ đề</span>
//                                         </div>
//       `;
//       slides.push(slide);
//     }
  
//     // Clone đầu và cuối
//     const firstSlide = slides[0].cloneNode(true);
//     const lastSlide = slides[slides.length - 1].cloneNode(true);
  
//     // Thêm các slide vào carousel
//     carouselTrack.appendChild(lastSlide);
//     slides.forEach(slide => carouselTrack.appendChild(slide));
//     carouselTrack.appendChild(firstSlide);
  
//     const slideWidth = slides[0].offsetWidth;
//     let currentIndex = 1;
  
//     function updateCarousel() {
//       carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     }
  
//     function moveToNextSlide() {
//       if (currentIndex >= slideCount) {
//         // Move back to the first real slide
//         carouselTrack.style.transition = 'none';
//         currentIndex = 1;
//         updateCarousel();
//         // Force a reflow to restart the transition
//         carouselTrack.offsetHeight;
//         carouselTrack.style.transition = 'transform 0.5s ease-in-out';
//       } else {
//         currentIndex++;
//         updateCarousel();
//       }
//     }
  
//     function moveToPrevSlide() {
//       if (currentIndex <= 0) {
//         // Move to the last real slide
//         carouselTrack.style.transition = 'none';
//         currentIndex = slideCount - 1;
//         updateCarousel();
//         // Force a reflow to restart the transition
//         carouselTrack.offsetHeight;
//         carouselTrack.style.transition = 'transform 0.5s ease-in-out';
//       } else {
//         currentIndex--;
//         updateCarousel();
//       }
//     }
  
//     // Event listeners for navigation buttons
//     document.querySelector(".next").addEventListener("click", moveToNextSlide);
//     document.querySelector(".prev").addEventListener("click", moveToPrevSlide);
  
//     // Optional: Automatic slide change
//     setInterval(moveToNextSlide, 5000); // Thay đổi slide mỗi 5 giây
//   });
  



