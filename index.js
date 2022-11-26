/* Selectors */
const menuBar = document.querySelector(".open-menu");
const burger = document.querySelector(".burger");
const menuClose = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");
const hasSubmenu = document.querySelectorAll(".has-submenu > a");
const arrowUp = document.querySelectorAll(".up");
const arrowDown = document.querySelectorAll(".down");
const subMenu1 = document.querySelector(".submenu1");
const subMenu2 = document.querySelector(".submenu2");

/* functions */

function closeMenu(e) {
  navMenu.classList.remove("menu-open");
  navMenu.classList.add("remove");
  document.body.style.backgroundColor = "hsl(0, 0%, 98%";
 
}

function openMenu(e) {
  navMenu.classList.remove("remove");
  navMenu.classList.add("menu-open");
  document.body.style.backgroundColor = "rgba(0, 0, 0, .5)";
 
}

function showMenu1(e) {
  if (e.target === hasSubmenu[0]) {
    subMenu1.classList.toggle("show");
    arrowDown[0].classList.toggle("down1");
    arrowUp[0].classList.toggle("up1");
  } else if (e.target === hasSubmenu[1]) {
    subMenu2.classList.toggle("show");
    arrowDown[1].classList.toggle("down1");
    arrowUp[1].classList.toggle("up1");
  }
  
}

/*event listeners*/
burger.addEventListener("click", openMenu); //menu icon
menuClose.addEventListener("click", closeMenu);

hasSubmenu.forEach((hasSubmenu) => {
  hasSubmenu.addEventListener("click", showMenu1);
});



