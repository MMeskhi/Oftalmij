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
const branchesBlocks = document.querySelectorAll(".branch-grid");
const mapBranches = document.querySelectorAll(".map-hover");

mapBranches.forEach((pin, index) => {
  pin.addEventListener("mouseover", () => {
    branchesBlocks[index].classList.add("branch-selected");
  });
  pin.addEventListener("mouseout", () => {
    branchesBlocks[index].classList.remove("branch-selected");
  });
});

//Art gallery selector
const gallerySelector = document.querySelectorAll(".gallery-selector");

gallerySelector.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const changeGallery = (active) => {
      for (let i = 0; i < gallerySelector.length; i++) {
        gallerySelector[i].classList.remove("active");
      }
      active.classList.add("active");
    };
    changeGallery(btn);
  });
});

const galleryGrid = document.querySelectorAll(".gallery-grid");

gallerySelector.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < gallerySelector.length; i++) {
      galleryGrid[i].classList.remove("gallery-active");
      gallerySelector[i].classList.remove("active");
    }
    galleryGrid[index].classList.add("gallery-active");
    gallerySelector[index].classList.add("active");
  });
});

//Contact from
const contactWarning = document.querySelector(".contact-warning");
const contactSubmit = document.getElementById("contactSubmit");

const userForm = document.getElementById("contactForm");
const userName = document.getElementById("userName");
const userLastName = document.getElementById("userLastName");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userMessage = document.getElementById("userMessage");

if (document.getElementById("contact")) {
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {
      name: userName.value,
      lastName: userLastName.value,
      email: userEmail.value,
      phone: userPhone.value,
      message: userMessage.value,
    };
    console.log(userData);
    formData(userData);
  });
}

function formData(userData) {
  fetch("http://oftalmij.com/ka/contact/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then(async (response) => {
      if (response.status == 200) {
        contactWarning.innerHTML = "მესიჯი წარმატებით გაიგზავნა.";
        userForm.style.pointerEvents = "none";
      }
      return response.json();
    })
    .catch((error) => {
      contactWarning.innerHTML = "მოხდა შეცდომა!";
      console.log(error);
    })
    .then((data) => {
      console.log(data);
      setTimeout(() => {
        userForm.reset();
        userForm.style.pointerEvents = "";
        contactWarning.innerHTML = "";
      }, 10000);
    });
}

//If on artGallery page swiper
if (document.getElementById("artGallery")) {
  const gallerySwiper = new Swiper(".mySwiper", {
    spaceBetween: 18,

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
