var tabs = document.getElementsByClassName("tab");
var main = document.getElementById("main");
var root = document.documentElement;
var slider = document.getElementById("slider");
var screens = main.getElementsByTagName("div");
for(var i = 0; i < screens.length; i ++){
  screens[i].style.left = i * window.innerWidth + "px";
}
for(var i = 0; i < tabs.length; i ++){
  var tabWidth = window.innerWidth / tabs.length;
  tabs[i].style.left = i * tabWidth + "px";
  root.style.setProperty("--tab-width", tabWidth + "px");
  tabs[i].addEventListener("click", function(){
    for(var j = 0; j < tabs.length; j ++){
      var tab = tabs[j];
      var tabInput = tab.getElementsByTagName("input")[0];
      if(tabInput.checked){
        slider.style.left = tab.style.left;
        console.log(tab.style.left);
      }
    }
  });
};
window.addEventListener("resize", function(){
  for(var i = 0; i < screens.length; i ++){
    screens[i].style.left = i * window.innerWidth + "px";
  }
  var tabWidth = window.innerWidth / tabs.length;
  for(var j = 0; j < tabs.length; j ++){
    var tab = tabs[j];
    var tabInput = tab.getElementsByTagName("input")[0];
    if(tabInput.checked){
      slider.style.left = tabWidth * j + "px";
    }
  }
  for(var i = 0; i < tabs.length; i ++){
    tabs[i].style.left = i * tabWidth + "px";
    root.style.setProperty("--tab-width", tabWidth + "px");
    tabs[i].addEventListener("click", function(){
      for(var j = 0; j < tabs.length; j ++){
        var tab = tabs[j];
        var tabInput = tab.getElementsByTagName("input")[0];
        if(tabInput.checked){
          slider.style.left = tab.style.left;
          console.log(tab.style.left);
        }
      }
    });
  }
});
setInterval(function(){
  var tabWidth = window.innerWidth / tabs.length;
  if(main.scrollLeft / window.innerWidth == Math.round(main.scrollLeft / window.innerWidth)){
    var amount = main.scrollLeft / window.innerWidth;
    tabs[amount].getElementsByTagName("input")[0].checked = true;
    slider.style.left = amount * tabWidth;
  }
}, 1000/60)
