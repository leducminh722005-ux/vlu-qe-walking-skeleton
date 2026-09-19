function login(username, password) {
    if (username === "admin" && password === "1234") {
        return true;
    }

    return false;
}

// Chỉ chạy phần giao diện khi đang ở trình duyệt
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = login(username, password);

        if (result) {
            document.getElementById("message").innerText =
                "Đăng nhập thành công!";
        } else {
            document.getElementById("message").innerText =
                "Sai username hoặc password!";
        }
    });
}

// Cho Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
