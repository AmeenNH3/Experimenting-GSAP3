const navBarLists = document.querySelectorAll(".navbar-list");

navBarLists.forEach((item) => {
  const tl = gsap.timeline({ paused: true }).to(item.querySelector(".navbar-link"), { x: 20 });
  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});
