window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var footer = document.querySelector("footer");

  if (window.scrollY > 0) {
    header.classList.add("hide-on-scroll");
    footer.classList.add("hide-on-scroll");
  } else {
    header.classList.remove("hide-on-scroll");
    footer.classList.remove("hide-on-scroll");
  }
});
