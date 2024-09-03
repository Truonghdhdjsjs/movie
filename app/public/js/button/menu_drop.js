// Select the elements for the dropdown menu and the toggle button
let menu_drop = document.querySelector(".drop_downs");
let appear = document.querySelector(".appears");

// Add a click event listener to the toggle button
appear.addEventListener("click", function() {
    // Toggle the class 'appear' on the dropdown menu
    menu_drop.classList.toggle("appear");
});