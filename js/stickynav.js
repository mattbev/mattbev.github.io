// When the user scrolls the page, execute myFunction
window.onscroll = function () {myFunction()};

// Get the navbar
var stickynav = document.getElementById("stickynav");

// Get the offset position of the navbar
var sticky = stickynav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    stickynav.classList.add("sticky")
  } else {
    stickynav.classList.remove("sticky");
  }
}
