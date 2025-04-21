var main = document.getElementById("main");
var waitingTabs = 1;
var root = document.documentElement;
root.style.setProperty("--settings-width", window.innerWidth + "px");
function showContents(element) {
  var div = element.getElementsByTagName("section")[0];
  div.style.display = "block";
  console.log(div)
  if(waitingTabs == 0){
    div.style.left = window.innerWidth + "px";
    main.scrollBy({
      top: 0,
      left: window.innerWidth,
      behavior: "smooth",
    })
  } else {
    root.style.setProperty("--settings-width", window.innerWidth / waitingTabs + "px");
    var div = element.getElementsByTagName("section")[0];
    div.childNodes.forEach(function(node){
      node.style.width = window.innerWidth + "px";
    });
  }
  waitingTabs += 1;
}
window.addEventListener("resize", function(){
  root.style.setProperty("--settings-width", window.innerWidth / waitingTabs + "px");
});