document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // Filtre des projets
  // -------------------------------
  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project-card");

  if (filters.length && projects.length) {
    filters.forEach(f => {
      f.addEventListener("click", () => {
        filters.forEach(btn => btn.classList.remove("active"));
        f.classList.add("active");

        const category = f.dataset.filter;
        projects.forEach(p => {
          p.style.display =
            category === "all" || p.dataset.category === category ? "block" : "none";
        });
      });
    });
  }

  // -------------------------------
  // Animation apparition au scroll
  // -------------------------------
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    window.addEventListener("scroll", () => {
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    });
  }

  // -------------------------------
  // Bouton flottant pour scroller vers le bas
  // -------------------------------
  const floatingButton = document.querySelector(".floating-button");
  if (floatingButton) {
    floatingButton.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    });
  }
// Hamburger menu responsive avec animation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Fermer le menu au clic sur un lien (pratique sur mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

  // -------------------------------
  // Smooth scroll pour la navbar
  // -------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  if (anchorLinks.length) {
    anchorLinks.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  }
  
});

