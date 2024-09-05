document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('ratingValue');

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            updateStars(value);
        });

        star.addEventListener('mouseout', () => {
            const selectedValue = document.querySelector('.star.selected')?.getAttribute('data-value');
            updateStars(selectedValue || 0);
        });

        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));
            star.classList.add('selected');
            ratingValue.textContent = `Đã đánh giá: ${value} sao`;
        });
    });

    function updateStars(value) {
        stars.forEach(star => {
            star.classList.toggle('selected', star.getAttribute('data-value') <= value);
        });
    }
});
