// const bodyEl = document.querySelector(".body");
// const wrapperEl = document.querySelector(".wrapper");

// const heroTitle = document.querySelector(".hero-title");
// const heroPara = document.querySelector(".hero-para");
// const heroBox = document.querySelector(".hero-box");
// const heroBoxInside = document.querySelector(".hero-inside-box");
// const heroBoxInside2 = document.querySelector(".hero-inside-inside-box");
// const heroBoxInside3 = document.querySelector(".hero-inside-inside-inside-box");

// const navbar = document.querySelector(".navbar");
// const logoBox = document.querySelector(".logo span");
// const socialLinks = document.querySelector(".social-link-list");

// gsap.set(heroBoxInside, { opacity: 0 });
// gsap.set(heroBoxInside2, { opacity: 0 });
// gsap.set(heroBoxInside3, { opacity: 0 });
// gsap.set(logoBox, { opacity: 0 });

// let animation = gsap
//   .timeline()
//   .from(heroTitle, { opacity: 0, yPercent: -20, duration: 2 })
//   .from(heroPara, { opacity: 0, yPercent: -20, duration: 1 }, "<0.5")
//   .from(heroBox, { xPercent: 200, duration: 2 }, "-=2")
//   .fromTo(heroBoxInside, { opacity: 0, yPercent: -200 }, { opacity: 1, yPercent: 0 }, "<0.5")
//   .fromTo(
//     heroBoxInside2,
//     { opacity: 0, xPercent: 600, yPercent: 200 },
//     { opacity: 1, xPercent: 0, yPercent: 0 },
//     "<0.5"
//   )
//   .fromTo(heroBoxInside3, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }, "<0.5")
//   .fromTo(navbar, { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0 }, "<1")
//   .to(logoBox, { x: 10, y: 10, opacity: 1, rotation: 16, ease: "bounce", duration: 1 }, "<0.5")
//   .fromTo(
//     ".social-link",
//     { opacity: 0, y: -20 },
//     { opacity: 1, y: 0, amount: 2, stagger: 0.3 },
//     "-=2"
//   );

// const navBarListLinks = document.querySelectorAll(".navbar-list");

// navBarListLinks.forEach((element) => {
//   const tween = gsap.fromTo(
//     element.querySelector(".line"),
//     { width: 0 },
//     { width: 12, duration: 0.5, paused: true }
//   );

//   element.addEventListener("mouseenter", () => tween.restart());
//   element.addEventListener("mouseleave", () => tween.reverse());
// });

// // socialLinks.forEach((element) => {
// //   const tl = gsap
// //     .timeline({ paused: true })
// //     .fromTo(element.querySelector("ion-ion"), { opacity: 0, y: -20 }, { y: 0, duration: 0.5 });

// //   element.addEventListener("mouseenter", () => tl.restart());
// //   element.addEventListener("mouseleave", () => tl.reverse());
// // });

// const burgerNav = document.querySelector(".burger-nav");
// const navBox = document.querySelector(".nav-box");
// const navBox1 = document.querySelector(".nav-inside-box");
// const navBox2 = document.querySelector(".nav-inside-inside-box");

// const mobilenavBarLists = document.querySelector(".mobile-navbar-lists");
// const mobilenavBarListsCloseButton = document.querySelector(".mobile-nav-close-button");
// const mobilenavBarListsButton = document.querySelector(".nav-button");
// // const navBar = document.querySelector(".navbar");

// let mobileNavOn = false;
// const tlNav = gsap
//   .timeline({ paused: true })
//   .fromTo(
//     mobilenavBarLists,
//     { xPercent: 100, visibility: "hidden" },
//     { xPercent: 0, visibility: "visible", duration: 0.75 }
//   );

// mobilenavBarListsButton.addEventListener("click", () => {
//   tlNav.restart();
//   mobileNavOn = !mobileNavOn;
//   if (mobileNavOn) {
//     bodyEl.classList.add("no-overflow");
//     wrapperEl.classList.add("no-overflow");
//   } else {
//     bodyEl.classList.remove("no-overflow");
//     wrapperEl.classList.remove("no-overflow");
//   }
// });

// mobilenavBarListsCloseButton.addEventListener("click", () => {
//   tlNav.reverse();
//   mobileNavOn = !mobileNavOn;
//   if (mobileNavOn) {
//     bodyEl.classList.add("no-overflow");
//     wrapperEl.classList.add("no-overflow");
//   } else {
//     bodyEl.classList.remove("no-overflow");
//     wrapperEl.classList.remove("no-overflow");
//   }
// });

// const mobilenavbarLinkList = document.querySelectorAll(".mobile-navbar-list");

// mobilenavbarLinkList.forEach((element, index) => {
//   const tl = gsap
//     .timeline({ paused: true })
//     .to(element.querySelector(".mobile-navbar-link"), { x: 10, color: "white", duration: 0.5 })
//     .to(element.querySelector(".box"), { width: 8, height: 8, borderRadius: 100 }, 0);

//   element.addEventListener("mouseenter", () => tl.restart());
//   element.addEventListener("mouseleave", () => tl.reverse());
// });

// addEventListener("resize", (event) => {});
// onresize = (event) => {
//   mobilenavBarLists.style.visibility = "hidden";
//   mobileNavOn = false;
//   bodyEl.classList.remove("no-overflow");
//   wrapperEl.classList.remove("no-overflow");
// };
gsap.registerPlugin(ScrollTrigger, Text);

gsap.to(".work-text", {
  text: "After graduating, [Your Name] started working as an ABAP developer for Cognizant Technology Solutions. However, you soon realized that [you] did not have a strong interest in that field or technology. Determined to find a career that [you] were passionate about, [you] began teaching yourself full stack development. With a huge love for UI/UX, [you] decided to make a change and landed a job as a software engineer at BlackHawk Network, a Gift Card and Branded Payments Company in Bangalore. At BlackHawk Network, [you] were able to apply [your] skills and passion for software engineering in a dynamic and innovative environment. [You] were able to work on exciting projects, and were part of a team that was dedicated to creating high-quality products. The experience at BlackHawk Network was a huge departure from [your] previous job, and [you] were able to enjoy [your] work and be passionate about it. [You] are grateful for the opportunity to work with such a great company, and [you] are excited to continue to learn and grow as a software engineer. [You] also believe that [your] previous work experience in ABAP development has provided [you] with a strong foundation in programming, and [you] are excited to apply this knowledge in new and exciting ways in the future.",
  duration: 15,
  scrollTrigger: {
    trigger: ".work-text-container",
    markers: true,
  },
});

// gsap.from(".work-text", {
//   duration: 6,
//   x: "-50vw",
//   scrollTrigger: ".work-text",
// });

// gsap.from(".work-text", {
//   scrollTrigger: ".work-text",
//   duration: 10,
//   x: -500,
// });
