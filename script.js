const main = document.querySelectorAll(".sub");

main.forEach((item) => {
  const h1 = item.querySelector(".h1");
  const p = item.querySelector(".p");

  item.addEventListener("click", () => {
    for (let i = 0; i < main.length; i++) {
      if (main[i] != item) {
        main[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    }
  });
});
