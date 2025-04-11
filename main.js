let switcher = document.getElementById("switcherMode");
let switcherContainer = document.getElementById("container");
let light = document.getElementById("light");
let nav = document.getElementById("navJS");
let hamburger = document.getElementById("hamburger")
let navMobile = document.getElementById("navForMobile")
switcher.addEventListener("click", function() {
    switcherContainer.classList.toggle("transition")
    light.style.opacity = "1";
})

function myFunction(x) {
    if (x.matches) { // If media query matches
    } else {
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 970px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });