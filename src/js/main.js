//Navbar dropdown
const menuAnchor = document.querySelectorAll(".nav-right ul li a");

menuAnchor.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    const parentMenu = btn.closest(".nav-right ul li");
    const menuOpen = parentMenu.querySelector(".dropdown");
    const filterToggle = () => {
      menuOpen.classList.toggle("inactive");
    };
    filterToggle(btn);
  });
});

//Mobile sidebar
const mobileHamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".mobile-sidebar");
const navbar = document.querySelector(".nav-left");
const noScroll = document.querySelector("body");
const sidebarMenu = document.querySelector(".mobile-menu");

function openSidebar() {
  sidebar.classList.toggle("sidebar-active");
  navbar.classList.toggle("bgcolor-active");
  noScroll.classList.toggle("no-scroll");
  sidebarMenu.classList.toggle("active");
}

mobileHamburger.addEventListener("click", openSidebar);
