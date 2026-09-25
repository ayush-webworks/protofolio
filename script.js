/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    if (window.innerWidth <= 850) {
      nav.style.display = "none";
    }

  });

});


/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";

});


/* =========================
   HOVER CURSOR
========================= */

const clickable = document.querySelectorAll("a, button");

clickable.forEach(element => {

  element.addEventListener("mouseenter", () => {

    ring.style.width = "55px";
    ring.style.height = "55px";

  });

  element.addEventListener("mouseleave", () => {

    ring.style.width = "35px";
    ring.style.height = "35px";

  });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".project-card, .about-box, .quote-box, .service, .contact"
);

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.15
  }

);

revealElements.forEach(element => {

  element.classList.add("reveal");

  observer.observe(element);

});


/* =========================
   PARALLAX HERO
========================= */

const heroImage = document.querySelector(".image-frame");
const circle = document.querySelector(".circle-back");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  if (scroll < window.innerHeight) {

    heroImage.style.transform =
      `rotate(3deg) translateY(${scroll * 0.08}px)`;

    circle.style.transform =
      `translateY(${scroll * 0.04}px)`;

  }

});
