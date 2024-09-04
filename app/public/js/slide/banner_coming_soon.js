document.addEventListener("DOMContentLoaded", function() {
    const slidesContainer = document.querySelector(".banner_coming-soon_img");
    const slides = document.querySelectorAll(".banner_coming-soon_img_slide");
    const slidesCount = slides.length;
    let currentIndex = 0;
    const intervalTime = 3000; // Thay đổi thời gian tự động (ms)

    function updateSlides() {
        // Cập nhật thuộc tính transform cho container chứa các slide để tạo hiệu ứng trượt
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        // Di chuyển đến slide tiếp theo và quay lại nếu đến cuối
        currentIndex = (currentIndex + 1) % slidesCount;
        updateSlides();
    }

    function prevSlide() {
        // Di chuyển đến slide trước đó và quay lại nếu ở đầu
        currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
        updateSlides();
    }

    function startAutoSlide() {
        // Thay đổi slide tự động sau mỗi khoảng thời gian
        setInterval(nextSlide, intervalTime);
    }

    // Gọi hàm updateSlides để định vị các slide đúng cách khi tải trang
    updateSlides();

    // Thêm sự kiện cho các nút điều hướng
    document.querySelector(".next-button").addEventListener("click", nextSlide);
    document.querySelector(".prev-button").addEventListener("click", prevSlide);

    // Bắt đầu tự động chuyển slide
    startAutoSlide();
});
