var storedTheme = localStorage.getItem("theme");
var theme = JSON.parse(storedTheme);
var root = document.documentElement;
root.style.setProperty("--background", theme[0]);
root.style.setProperty("--inactive", theme[1]);
root.style.setProperty("--text", theme[2]);
console.log(theme[0]);
