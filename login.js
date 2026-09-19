function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Xử lý form đăng nhập
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const result = login(username, password);

    if (result) {
        document.getElementById("message").innerText = "Đăng nhập thành công!";
    } else {
        document.getElementById("message").innerText = "Sai username hoặc password!";
    }
});

// Export hàm để Jest có thể test
module.exports = login;
