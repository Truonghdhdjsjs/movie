document.getElementById('submitComment').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText === '') {
        alert('Vui lòng nhập bình luận.');
        return;
    }

    // Tạo phần tử bình luận mới
    const commentList = document.getElementById('commentsList');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = `
        <img src="avatar-placeholder.png" alt="Avatar" class="avatar">
        <div class="comment-text">${commentText}</div>
    `;
    
    // Thêm bình luận vào danh sách
    commentList.appendChild(newComment);

    // Xóa nội dung ô nhập
    commentInput.value = '';
});
