const button = document.querySelector(".btn");
const bg = document.querySelector(".bg");

let tween = gsap.fromTo(bg, { scale: 0 }, { scale: 1, duration: 1, ease: "circ" });
button.addEventListener("mouseenter", function () {
  tween.restart();
});
