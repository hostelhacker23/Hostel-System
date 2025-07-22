const collegeList = [
  "B.K.N.S.G.P GOPALGANJ",
  "ARYABHATT POLYTECHNIC, GAYA",
  "BUDHA POLY INSTITUTE, GAYA",
  "G.P.MOTIHARI",
  "G.P.BHOJPUR",
  "G.P.MUNGER",
  "G.P.SIWAN",
  "G.P.GOPALGANJ",
  "G.P.PATNA-7",
  "G.W.P.MUZAFFARPUR"
];

function filterColleges() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  if (input === "") return;

  const filtered = collegeList.filter(college =>
    college.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    suggestions.innerHTML = "<li>No college found</li>";
    return;
  }

  filtered.forEach(college => {
    const li = document.createElement("li");
    li.textContent = college;
    li.onclick = () => {
      document.getElementById("searchBox").value = college;
      suggestions.innerHTML = "";
    };
    suggestions.appendChild(li);
  });
}


 
  
// frontend/js/app.js

// =======================
// Function to Handle Login
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!username || !password) {
        alert("Please fill all fields");
        return;
      }

      try {
        const response = await fetch("http://localhost:5500/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok) {
          alert("Login saved successfully");
          loginForm.reset();
          // Redirect or show next section
        } else {
          alert(result.error || "Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Server Error. Try again later.");
      }
    });
  }
});