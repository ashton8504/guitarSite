// Jerry JavaScript Section

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

// Arista JavaScript Section

const footer2 = document.querySelector(".artistaFooter");

const logo2 = document.querySelector(".company-logo-arista-page");

logo2.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateScrollableHeight2() {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return scrollableHeight;
}

window.addEventListener("scroll", () => {
  const scrollableHeight = updateScrollableHeight2();
  if (window.scrollY >= scrollableHeight) {
    footer2.classList.add("show-footer");
  } else {
    footer2.classList.remove("show-footer");
  }
});

window.addEventListener("load", () => {
  const scrollableHeight = updateScrollableHeight2();
});

window.addEventListener("resize", () => {
  const scrollableHeight = updateScrollableHeight2();
});

// Get all the thumbnail images
const thumbnails = document.querySelectorAll(".img-thumbnail");

// Loop through each thumbnail and add a click event listener
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    // Toggle the 'active' class on the clicked thumbnail
    thumbnail.classList.toggle("active");
  });
});
