var tabs = document.getElementsByClassName("tab");
var root = document.documentElement;
var slider = document.getElementById("slider");
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
})
var screens = document.getElementById("main").getElementsByTagName("div");
for(var i = 0; i < screens.length; i ++){
  screens[i].style.left = i * window.innerWidth + "px";
}