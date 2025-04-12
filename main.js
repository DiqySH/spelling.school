let switcher = document.getElementById("switcherMode");
let switcherContainer = document.getElementById("container");
let light = document.getElementById("light");
let nav = document.getElementById("navbar");
let hamburger = document.getElementById("hamburger")
let navMobile = document.getElementById("navForMobile")
let svg = document.getElementById("svg")
switcher.addEventListener("click", function() {
    switcherContainer.classList.toggle("transition")
    light.style.opacity = "1";
})

function myFunction(x) {
    if (x.matches) {
    } else {
    }
  }
  
  var x = window.matchMedia("(max-width: 970px)")
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
  });

  window.addEventListener('scroll',(e)=>{
    const navbar = document.getElementById('navbar');
    if(window.pageYOffset>0){
      navbar.classList.add("add-shadow");
    }else{
      navbar.classList.remove("add-shadow");
    }
  });