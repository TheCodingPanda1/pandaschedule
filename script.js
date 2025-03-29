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
      var interval;
      if(tabInput.checked){
        slider.style.left = tab.style.left;
        main.scroll({
          top: 0,
          left: window.innerWidth * j,
          behavior: "smooth",
        });
        console.log("yay!");
      }
    }
  })
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
          main.scroll({
            top: 0,
            left: window.innerWidth * j,
            behavior: "smooth",
          });
          console.log("yay!");
        }
      }
    });
  }
});
var changeTab = function(){
  var tabWidth = window.innerWidth / tabs.length;
  if(main.scrollLeft / window.innerWidth == Math.round(main.scrollLeft / window.innerWidth)){
    var amount = main.scrollLeft / window.innerWidth;
    tabs[amount].getElementsByTagName("input")[0].checked = true;
    slider.style.left = amount * tabWidth + "px";
  }
};
var showRightBar = function(){
  var rightBar = document.getElementById("right-bar");
  rightBar.style.right = "0px";
};
const input = document.getElementById('number');
input.addEventListener('keydown', function (event) {
  if(parseInt(event.key) != event.key ){
    event.preventDefault();
  }
});


//Customising the selects
const selects = document.getElementsByClassName("select");

for (let i = 0; i < selects.length; i++) {
  selects[i].tabIndex = 0;
  let selectDivs = selects[i].getElementsByTagName("div");

  for (let j = 0; j < selectDivs.length; j++) {
    let div = selectDivs[j];
    div.tabIndex = 0;
    let name = selects[i].getAttribute("name");

    // Create and append input element
    let input = document.createElement("input");
    input.type = "radio";
    input.setAttribute("name", name);
    div.appendChild(input);

    // Add event listener for click
    div.addEventListener("click", function () {
      // Update only the first child's text content
      let firstChild = selects[i].childNodes[0];
      if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
        firstChild.textContent = this.innerText;
      }
      console.log("Selected option is:", this.innerText);
    });
  }
}

