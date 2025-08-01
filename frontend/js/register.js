function togglePassword() {
  const password = document.getElementById('password');
  password.type = password.type === 'password' ? 'text' : 'password';
}

document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/api/student/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, username, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      window.location.href = "../pages/login_page.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Something went wrong during registration");
    console.error(error);
  }
});
