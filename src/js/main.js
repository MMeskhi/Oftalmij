//Mobile sidebar
const mobileHamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".mobile-sidebar");
const noScroll = document.querySelector("body");
const sidebarMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

function openSidebar() {
  sidebar.classList.toggle("sidebar-active");
  noScroll.classList.toggle("no-scroll");
  sidebarMenu.classList.toggle("active");
  menuOpen.classList.toggle("switch-btn");
  menuClose.classList.toggle("switch-btn");
}

mobileHamburger.addEventListener("click", openSidebar);

const mobileCatTogglers = document.querySelectorAll(".mobile-cat");
// const mobileDropdown = document.querySelectorAll(".mobile-menu-dropdown");

mobileCatTogglers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentFilter = btn.closest(".mobile-cat");
    const filterOpen = parentFilter.querySelector(".mobile-menu-dropdown");
    const filterToggle = () => {
      filterOpen.classList.toggle("open");
    };
    filterToggle(btn);
  });
});

//Lang switcher dropdown
const langSwitch = document.querySelector(".lang-swt");
const langDropdown = document.querySelector(".lang-swt-drp");

function openLangSwitcher() {
  langSwitch.classList.toggle("lang-active");
  langDropdown.classList.toggle("swt-active");
}

langSwitch.addEventListener("click", openLangSwitcher);

//Click outside of lang switcher to close
document.addEventListener("click", (event) => {
  const isClickInside = langSwitch.contains(event.target);

  if (!isClickInside) {
    isLangSwitcherOpen();
  }
});

function isLangSwitcherOpen() {
  if (langSwitch.classList.contains("lang-active")) {
    openLangSwitcher();
  }
  return;
}

//If on artGallery page swiper
if (document.getElementById("artGallery")) {
  const gallerySwiper = new Swiper(".mySwiper", {
    spaceBetween: 18,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      480: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 18,
      },

      1000: {
        slidesPerView: 4,
        spaceBetween: 18,
      },

      1225: {
        slidesPerView: 5,
        spaceBetween: 18,
      },

      1500: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
  });
}
