const main=document.querySelector("main"),nav=document.querySelector(".nav");main.classList.contains("home")&&(nav.style.justifyContent="flex-end");const btnMenu=document.getElementById("btn__menu"),navMenu=document.getElementById("nav__menu"),navLogo=document.querySelectorAll(".logo__dot"),navIcons=document.querySelectorAll(".nav__icon");btnMenu.addEventListener("click",()=>{navMenu.classList.toggle("toggle-menu"),btnMenu.classList.toggle("spin-menuBtn"),navLogo.forEach(dot=>{dot.classList.toggle("toggle-menuIcon")}),navIcons.forEach(icon=>{icon.classList.toggle("toggle-menuIcon")})});