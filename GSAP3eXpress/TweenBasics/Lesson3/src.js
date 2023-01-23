let tween = gsap.fromTo(
  ".orange",
  { x: -300, paused: true },
  { x: 300, paused: true, duration: 3, paused: true, repeat: -1, yoyo: true }
);

document.getElementById("play").onclick = () => {
  tween.play();
};

document.getElementById("pause").onclick = () => {
  tween.pause();
};

document.getElementById("reverse").onclick = () => {
  tween.reverse();
};

document.getElementById("restart").onclick = () => {
  tween.restart();
};
