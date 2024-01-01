   // Function to set the dark mode preference in localStorage
   function setDarkModePreference(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
  }

  // JavaScript function to toggle light and dark mode
  function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains("dark-mode");

    // Toggle the dark mode class on the body element
    if (isDarkMode) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    }

    // Save the dark mode preference to localStorage
    setDarkModePreference(!isDarkMode);

    // Toggle the sun/moon emoji
    const sunMoonEmoji = document.getElementById("sunMoonEmoji");
    sunMoonEmoji.innerText = isDarkMode ? "☀️" : "🌙";
  }

  // Function to check the user's dark mode preference on page load
  function checkDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
      document.getElementById("sunMoonEmoji").innerText = "🌙";
    } else {
      body.classList.add("light-mode");
      document.getElementById("sunMoonEmoji").innerText = "☀️";
    }
  }