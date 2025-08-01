function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Dummy login check — replace this with real backend later
  if (username === "student" && password === "1234") {
    // Store user session (optional)
    localStorage.setItem("loggedInStudent", username);
    window.location.href = "../pages/Student_Dashboard.html";
  } else {
    alert("Invalid credentials. Try 'student' and '1234'.");
  }
}
