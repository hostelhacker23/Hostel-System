function togglePassword() {
  const password = document.getElementById('password');
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Registration successful! (Link to backend needed)");
  // Here, you can connect with your backend using fetch or axios
});