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


 
  const modeToggle = document.getElementById('modeToggle');
  const modeIcon = document.getElementById('modeIcon');
  const modeText = document.getElementById('modeText');
  const navbar = document.getElementById('mainNavbar');

  modeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');

    if (isDark) {
      document.body.classList.remove('light-mode');
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-dark');

      // Now that dark mode is ON: offer Light Mode button
      modeIcon.src = 'https://img.icons8.com/ios-filled/24/ffffff/sun--v1.png';
      modeText.textContent = 'Light Mode';
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.classList.add('navbar-light', 'bg-light');

      // Now that light mode is ON: offer Dark Mode button
      modeIcon.src = 'https://img.icons8.com/ios-filled/24/000000/moon-symbol.png';
      modeText.textContent = 'Dark Mode';
    }
  });
