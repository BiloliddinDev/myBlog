const menu = document.querySelector(".fa-solid");

menu.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("none");
});

const anime = document.querySelector("div");

setTimeout(() => {
  anime.classList.add("fit");
}, 3000);
