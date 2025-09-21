// Filtre des projets
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

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

// Animation apparition au scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
});

// Bouton flottant pour scroller vers le bas
document.querySelector(".floating-button").addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});

// Smooth scroll pour la navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
