// JavaScript to handle scroll event and show/hide navigation
window.addEventListener("scroll", function() {
    var navHeader = document.querySelector(".nav-header");
    
    if (window.scrollY > 0) {
      navHeader.classList.add("hide");
    } else {
      navHeader.classList.remove("hide");
    }
  });