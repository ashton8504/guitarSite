const footer = document.querySelector(".jerryFooter");

window.addEventListener("scroll", () => {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY >= scrollableHeight) {
    footer.classList.add("show-footer");
  } else {
    footer.classList.remove("show-footer");
  }
});
