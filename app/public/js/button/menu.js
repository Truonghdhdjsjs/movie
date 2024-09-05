let button_open_menu = document.querySelector(".fa-bars");
let button_close_menu = document.querySelector(".fa-x");
let form_menu = document.querySelector(".header_above_nav_menu_border");
let btnSearch =  document.querySelector("#button_searchs");
let txt_search = document.querySelector("#txtsearchss");

// btnSearch.addEventListener("submit",function(event){
//     event.preventDefault();
//     if(txt_search.value.trim() ==="")
//     {
//         txt_search.classList.add("outline_err");
//         alert("banj chua nhap du lieu")
//         return false;
//     }
//     txt_search.classList.remove("outline_err");
//     return true;
// })


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
    if (!form_menu.contains(e.target) && !button_open_menu.contains(e.target) && !button_close_menu.contains(e.target) && !btnSearch.contains(e.target)) {
        form_menu.classList.remove("active");
    }
});
