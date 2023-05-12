const footer = document.querySelector(".jerryFooter");
const logo = document.querySelector(".company-logo-jerry-page");

logo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateScrollableHeight() {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return scrollableHeight;
}

window.addEventListener("scroll", () => {
  const scrollableHeight = updateScrollableHeight();
  if (window.scrollY >= scrollableHeight) {
    footer.classList.add("show-footer");
  } else {
    footer.classList.remove("show-footer");
  }
});

window.addEventListener("load", () => {
  const scrollableHeight = updateScrollableHeight();
});

window.addEventListener("resize", () => {
  const scrollableHeight = updateScrollableHeight();
});
