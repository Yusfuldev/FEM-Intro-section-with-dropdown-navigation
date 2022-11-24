/* Selectors */
const menuBar = document.querySelector(".open-menu");
const burger = document.querySelector(".burger");
const menuClose = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");
const arrowUp = document.querySelector(".up");
const arrowDown = document.querySelector(".down");
const arrowUp1 = document.querySelector(".up1");
const arrowDown1 = document.querySelector(".down1");
const links = document.querySelectorAll(".link");
const subMenu1 = document.querySelector(".submenu1");
const subMenu2 = document.querySelector(".submenu2");
const overlay = document.querySelector(".overlay");

/* functions */

function closeMenu(e) {
  navMenu.classList.remove("menu-open");
  overlay.style.display = "none";
}
function openMenu() {
  navMenu.classList.add("menu-open");
  overlay.style.display = "block";
}

function up(e) {
  if (e.target.classList.contains("down1")) {
    subMenu1.classList.add("show");
    arrowDown1.style.display = "none";
    arrowUp1.style.display = "inline-Block";
  } else if (e.target.classList.contains("up1")) {
    subMenu1.classList.remove("show");
    arrowDown1.style.display = "inline-Block";
    arrowUp1.style.display = "none";
  }
  console.log(" clicked");
}

function up2(e) {
  if (e.target.classList.contains("down")) {
    subMenu2.classList.add("show");
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline-Block";
  } else if (e.target.classList.contains("up")) {
    subMenu2.classList.remove("show");
    arrowDown.style.display = "inline-Block";
    arrowUp.style.display = "none";
  }
}

/*event listeners*/
burger.addEventListener("click", openMenu); //menu icon
menuClose.addEventListener("click", closeMenu);

arrowDown.addEventListener("click", up2); //bottom sub-menu
arrowUp.addEventListener("click", up2);

arrowDown1.addEventListener("click", up); //top sub-menu
arrowUp1.addEventListener("click", up);
