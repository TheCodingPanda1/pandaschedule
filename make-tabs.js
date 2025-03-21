var tabs = document.getElementsByClassName("tab");
var root = document.documentElement;
for(var i = 0; i < tabs.length; i ++){
  var tabWidth = window.innerWidth / tabs.length;
  tabs[i].style.left = i * tabWidth + "px";
}