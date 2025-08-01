function login(event) {
  event.preventDefault(); // 🛑 Stop form from refreshing the page

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validUsers = [
    { user: "student1", pass: "123" },
    { user: "student2", pass: "abc" }
  ];

  const match = validUsers.find(u => u.user === username && u.pass === password);

  if (match) {
    alert("You are Logged in Successfully!");
    window.location.href = "../pages/Student_Dashboard.html";
  } else {
    alert("Invalid username or password!");
  }
}
