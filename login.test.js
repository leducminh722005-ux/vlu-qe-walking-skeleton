const login = require("./login");

test("Đăng nhập đúng", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Sai mật khẩu", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Sai username", () => {
    expect(login("user", "123")).toBe(false);
});
