var tabs = document.getElementsByClassName("tab");
var root = document.documentElement;
var slider = document.getElementById("slider");
for(var i = 0; i < tabs.length; i ++){
  var tabWidth = window.innerWidth / tabs.length;
  tabs[i].style.left = i * tabWidth + "px";
  root.style.setProperty("--tab-width", tabWidth + "px");
  tabs[i].addEventListener("click", function(){
    slider.style.left = tabWidth * i + "px";
    console.log(tabs[i]);
  });
}