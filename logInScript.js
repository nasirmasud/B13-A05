const logInBtn = document.getElementById("login-btn");

if (logInBtn) {
  logInBtn.addEventListener("click", function () {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin123") {
      window.location.href = "main.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
}
