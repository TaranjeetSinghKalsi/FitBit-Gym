// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("header");
var hamBurger= document.querySelector(".hamburger");

// Get the offset position of the navbar
var prevScrollpos = header.offsetTop;
var sticky = header.offsetTop;
var startTimer=setTimeout(function() {
}, 10);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  var currentScrollPos = window.pageYOffset;
  clearTimeout(startTimer);
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("sticky");
    header.style.top = '0px';
    hamBurger.style.top='30px';
    startTimer= setTimeout(function() {
      header.style.top = '-100px';
    }, 2000);
    // header.classList.add("header-animation");

  } else {
    // header.classList.remove("sticky");
    // clearTimeout(startTimer);
    header.style.top = '-100px';
    // header.classList.remove("header-animation");
  }
  if (sticky  > currentScrollPos){
    clearTimeout(startTimer);
    header.classList.remove("sticky");
    header.style.top = '30px';
    hamBurger.style.top='15px';
  }

  prevScrollpos = currentScrollPos;
}


let navbar = document.querySelector("#nav-ul");
var logo= document.getElementById("logo");
hamBurger.addEventListener('click', ()=>{
//  navbar.style.display='block';
// navbar.style.left='0';
navbar.classList.toggle("nav-transition");
logo.classList.toggle("logo-transition");
})

