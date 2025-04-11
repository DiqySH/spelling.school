let switcher = document.getElementById("switcherMode");
let switcherContainer = document.getElementById("container");
let light = document.getElementById("light");
switcher.addEventListener("click", function() {
    switcherContainer.classList.toggle("transition")
    light.style.opacity = "1";
})