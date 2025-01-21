var themeSelect = document.querySelector("#theme");
var theme = ["rgb(250, 250, 250)", "lightgray", "rgb(25, 25, 25)"];
var root = document.documentElement;
setInterval(function(){
    if(themeSelect.value == "light"){
        theme = ["rgb(250, 250, 250)", "lightgray", "rgb(25, 25, 25)"];
        root.style.setProperty("--background", "rgb(250, 250, 250)");
        root.style.setProperty("--inactive", "lightgray");
        root.style.setProperty("--text", "rgb(25, 25, 25)");
    } else {
        theme = ["rgb(25, 25, 25)", "rgb(50, 50, 50)", "rgb(250, 250, 250)"];
        root.style.setProperty("--background", "rgb(25, 25, 25)");
        root.style.setProperty("--inactive", "rgb(50, 50, 50)");
        root.style.setProperty("--text", "rgb(250, 250, 250)");
    }
}, 1000/60);
var ok = document.querySelector("#ok");
ok.addEventListener("click", function(){
    var storedTheme = JSON.stringify(theme);
    localStorage.setItem("theme", storedTheme);
});
