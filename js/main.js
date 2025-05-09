const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector("#header");
const goToTop = document.querySelector("#goToTop");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

//Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      navBtnImg.src = "img/icons/open.svg";
    }
  });
});


//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  if (header) {
    // Check for home section OR project-hero section
    const heroSection = document.querySelector("#home") || document.querySelector("#project-hero");
    // Default scroll trigger height if no hero section is found
    let triggerHeight = 100;
    
    // If we found a hero section, use its height for calculation
    if (heroSection) {
      triggerHeight = heroSection.offsetHeight - 170;
    }

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      if (goToTop) goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      if (goToTop) goToTop.classList.remove("reveal");
    }
  }
});

//AOS animations settings
AOS.init({
  once: true,
});
