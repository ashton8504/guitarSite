window.addEventListener("scroll", function () {
  var footer = document.querySelector(".jerryFooter");
  var position = footer.getBoundingClientRect().top;

  // checking whether the footer is visible
  if (position < window.innerHeight) {
    // footer is visible, so show it
    footer.classList.add("visible");
  } else {
    // footer is not visible, so hide it
    footer.classList.remove("visible");
  }
});
