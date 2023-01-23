const heroTitle = document.querySelector(".hero-title");
const heroPara = document.querySelector(".hero-para");
const heroBox = document.querySelector(".hero-box");
const heroBoxInside = document.querySelector(".hero-inside-box");
const heroBoxInside2 = document.querySelector(".hero-inside-inside-box");
const heroBoxInside3 = document.querySelector(".hero-inside-inside-inside-box");

const navbar = document.querySelector(".navbar");

const logoBox = document.querySelector(".logo span");

gsap.set(heroBoxInside, { opacity: 0 });
gsap.set(heroBoxInside2, { opacity: 0 });
gsap.set(heroBoxInside3, { opacity: 0 });
gsap.set(logoBox, { opacity: 0 });

let animation = gsap
  .timeline()
  .from(heroTitle, { opacity: 0, yPercent: -20, duration: 2 })
  .from(heroPara, { opacity: 0, yPercent: -20, duration: 1 }, "<0.5")
  .from(heroBox, { xPercent: 200, duration: 2 }, "-=2")
  .fromTo(heroBoxInside, { opacity: 0, yPercent: -200 }, { opacity: 1, yPercent: 0 }, "<0.5")
  .fromTo(
    heroBoxInside2,
    { opacity: 0, xPercent: 600, yPercent: 200 },
    { opacity: 1, xPercent: 0, yPercent: 0 },
    "<0.5"
  )
  .fromTo(heroBoxInside3, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }, "<0.5")
  .fromTo(navbar, { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0 }, "<1")
  .to(logoBox, { x: 10, y: 10, opacity: 1, rotation: 16, ease: "bounce", duration: 1 });
