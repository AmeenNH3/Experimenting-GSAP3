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

const burgerNav = document.querySelector(".burger-nav");
const navBox = document.querySelector(".nav-box");
const navBox1 = document.querySelector(".nav-inside-box");
const navBox2 = document.querySelector(".nav-inside-inside-box");

const navBarLists = document.querySelector(".navbar-lists");
const navBarListsCloseButton = document.querySelector(".nav-close-button");
const navBarListsButton = document.querySelector(".nav-button");
let navOn = false;
const tlNav = gsap
  .timeline({ paused: true })
  .fromTo(navBarLists, { xPercent: 100, duration: 1.5 }, { xPercent: 0, duration: 1.5 });

navBarListsButton.addEventListener("click", () => {
  navBarLists.classList.add("show");
  tlNav.restart();
  navOn = !navOn;
});

navBarListsCloseButton.addEventListener("click", () => {
  tlNav.reverse();
  Sleep(1500);
  navBarLists.classList.remove("show");
  navOn = !navOn;
});

if (navOn == false) {
  gsap.set(navBarLists, { clearProps: "all" });
}

const navbarLinkList = document.querySelectorAll(".navbar-list");

// navbarLinkList.forEach((element, index) => {
//   const tl = gsap
//     .timeline({ paused: true })
//     .to(element.querySelector(".navbar-link"), { scale: 1.2 });

//   element.addEventListener("mouseenter", () => tl.play());
//   element.addEventListener("mouseleave", () => tl.reverse());
// });
