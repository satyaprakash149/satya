document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let username = document.querySelector("#loginForm .input[type='text']").value;
    let password = document.querySelector("#loginForm .input[type='password']").value;

    if (username === "satya@123" && password === "satya123") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect after login
    } else {
        alert("Invalid username or password");
    }
});
