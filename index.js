const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("play");
});

keys.forEach((key) => {
  key.addEventListener("transitionend", () => key.classList.remove("play"));
});
