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

// Map hover
if (document.getElementById("branches")) {
  const branchSelectorZugdidi = document.getElementById("zug");
  const branchHoverZugdidi = document.querySelector(".zugdidi");
  const branchSelectorKutaisi = document.getElementById("kut");
  const branchHoverKutaisi = document.querySelector(".kutaisi");
  const branchSelectorGori = document.getElementById("gori");
  const branchHoverGori = document.querySelector(".gori");
  const branchSelectorTelavi = document.getElementById("tela");
  const branchHoverTelavi = document.querySelector(".telavi");
  const branchSelectorTbilisi = document.getElementById("tbil");
  const branchHoverTbilisi = document.querySelector(".tbilisi");
  const branchSelectorMarneuli = document.getElementById("marn");
  const branchHoverMarneuli = document.querySelector(".marneuli");
  const branchSelectorRustavi = document.getElementById("rust");
  const branchHoverRustavi = document.querySelector(".rustavi");
  const branchSelectorGurjani = document.getElementById("gurj");
  const branchHoverGurjani = document.querySelector(".gurjani");

  function selectBranch() {
    branchSelectorZugdidi.classList.toggle("branch-selected");
  }
  function selectBranchB() {
    branchSelectorKutaisi.classList.toggle("branch-selected");
  }
  function selectBranchC() {
    branchSelectorGori.classList.toggle("branch-selected");
  }
  function selectBranchD() {
    branchSelectorTelavi.classList.toggle("branch-selected");
  }
  function selectBranchE() {
    branchSelectorTbilisi.classList.toggle("branch-selected");
  }
  function selectBranchF() {
    branchSelectorMarneuli.classList.toggle("branch-selected");
  }
  function selectBranchG() {
    branchSelectorRustavi.classList.toggle("branch-selected");
  }
  function selectBranchH() {
    branchSelectorGurjani.classList.toggle("branch-selected");
  }

  branchHoverZugdidi.addEventListener("mouseover", selectBranch, false);
  branchHoverZugdidi.addEventListener("mouseout", selectBranch, false);

  branchHoverKutaisi.addEventListener("mouseover", selectBranchB, false);
  branchHoverKutaisi.addEventListener("mouseout", selectBranchB, false);

  branchHoverGori.addEventListener("mouseover", selectBranchC, false);
  branchHoverGori.addEventListener("mouseout", selectBranchC, false);

  branchHoverTelavi.addEventListener("mouseover", selectBranchD, false);
  branchHoverTelavi.addEventListener("mouseout", selectBranchD, false);

  branchHoverTbilisi.addEventListener("mouseover", selectBranchE, false);
  branchHoverTbilisi.addEventListener("mouseout", selectBranchE, false);

  branchHoverMarneuli.addEventListener("mouseover", selectBranchF, false);
  branchHoverMarneuli.addEventListener("mouseout", selectBranchF, false);

  branchHoverRustavi.addEventListener("mouseover", selectBranchG, false);
  branchHoverRustavi.addEventListener("mouseout", selectBranchG, false);

  branchHoverGurjani.addEventListener("mouseover", selectBranchH, false);
  branchHoverGurjani.addEventListener("mouseout", selectBranchH, false);
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
