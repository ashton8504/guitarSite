const footer = document.querySelector(".jerryFooter");

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

// const footer = document.querySelector(".jerryFooter");
// const imageContainer = document.querySelector(".image-container");

// window.addEventListener("scroll", () => {
//   const scrollableHeight = imageContainer.offsetHeight - window.innerHeight;
//   if (window.scrollY >= scrollableHeight) {
//     footer.classList.add("show-footer");
//   } else {
//     footer.classList.remove("show-footer");
//   }
// });
