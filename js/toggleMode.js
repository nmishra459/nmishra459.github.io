  function setDarkModePreference(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
  }

  function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    }

    setDarkModePreference(!isDarkMode);

    const sunMoonEmoji = document.getElementById("sunMoonEmoji");
    sunMoonEmoji.innerText = isDarkMode ? "☀️" : "🌙";
  }

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