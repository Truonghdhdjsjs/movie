let button_open_menu = document.querySelector(".fa-bars");
let button_close_menu = document.querySelector(".fa-x");
let form_menu = document.querySelector(".header_above_nav_menu_border");

// Open menu
button_open_menu.addEventListener("click", function() {
    form_menu.classList.add("active");
});

// Close menu via close button
button_close_menu.addEventListener("click", function() {
    form_menu.classList.remove("active");
});

// Close menu when clicking outside of it
document.addEventListener('click', function(e) {
    // Check if the click is outside the menu
    if (!form_menu.contains(e.target) && !button_open_menu.contains(e.target) && !button_close_menu.contains(e.target)) {
        form_menu.classList.remove("active");
    }
});
