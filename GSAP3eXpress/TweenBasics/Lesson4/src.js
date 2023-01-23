const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const reverse = document.querySelector("#reverse");
const restart = document.querySelector("#restart");
const bg = document.querySelectorAll("#play .bg");
const bg1 = document.querySelectorAll("#pause .bg");
const bg2 = document.querySelectorAll("#reverse .bg");
const bg3 = document.querySelectorAll("#restart .bg");

let tween = gsap.fromTo(bg, { scale: 0 }, { scale: 1, duration: 1, ease: "circ" });
let tween1 = gsap.fromTo(bg1, { scale: 0 }, { scale: 1, duration: 1, ease: "circ" });
let tween2 = gsap.fromTo(bg2, { scale: 0 }, { scale: 1, duration: 1, ease: "circ" });
let tween3 = gsap.fromTo(bg3, { scale: 0 }, { scale: 1, duration: 1, ease: "circ" });

play.addEventListener("mouseenter", function () {
  tween.restart();
});

pause.addEventListener("mouseenter", function () {
  tween1.restart();
});

reverse.addEventListener("mouseenter", function () {
  tween2.restart();
});

restart.addEventListener("mouseenter", function () {
  tween3.restart();
});
