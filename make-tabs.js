var tabs = document.getElementsByClassName("tab");
var root = document.documentElement;
for(var i = 0; i < tabs.length; i ++){
  var tabWidth = window.innerWidth / tabs.length;
  var tabSelected = tabs[i].getElementsByTagName("div")[0];
  tabSelected.style.width = tabWidth + "px";
  tabs[i].style.left = i * tabWidth + "px";
}