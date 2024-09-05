// Các biến để tham chiếu đến các phần tử HTML
let buttonSearch = document.querySelector(".btn_search");
let textSearch = document.querySelector("#txtsearchs");
let formSearch = document.querySelector("#form_search");

// Xử lý sự kiện khi gửi biểu mẫu tìm kiếm
formSearch.addEventListener("submit", function(event) {
    // Biến để kiểm tra xem có lỗi không
    let hasError = false;

    // Xóa thông báo lỗi trước đó
    textSearch.classList.remove("outline_err");

    // Kiểm tra xem người dùng có nhập thông tin không
    if (textSearch.value.trim() === "") {
        // Hiển thị thông báo lỗi nếu trường tìm kiếm trống
        textSearch.classList.add("outline_err");
        alert("Bạn chưa nhập thông tin");
        hasError = true; // Đánh dấu có lỗi
    } else {
        // Thực hiện hành động tìm kiếm khi người dùng đã nhập thông tin
        console.log("Tìm kiếm với thông tin:", textSearch.value.trim());
        // Bạn có thể gửi yêu cầu AJAX hoặc xử lý dữ liệu ở đây nếu cần
    }

    // Ngăn gửi biểu mẫu nếu có lỗi
    if (hasError) {
        event.preventDefault();
    }
});
