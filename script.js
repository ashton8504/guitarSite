const gallery = document.querySelector(".scrollable");
const images = document.querySelectorAll(".img-thumbnail");
const prevArrow = document.createElement("div");
prevArrow.classList.add("prev-arrow");
prevArrow.innerHTML = '<i class="fas fa-angle-left"></i>';
gallery.appendChild(prevArrow);
const nextArrow = document.createElement("div");
nextArrow.classList.add("next-arrow");
nextArrow.innerHTML = '<i class="fas fa-angle-right"></i>';
gallery.appendChild(nextArrow);

let currentIndex = 0;
let previousIndex = null;
let nextIndex = null;

images[currentIndex].classList.add("active");

function updateIndexes() {
  previousIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  nextIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1;
}

function showImage(index) {
  images[currentIndex].classList.remove("active");
  images[index].classList.add("active");
  currentIndex = index;
  updateIndexes();
}

prevArrow.addEventListener("click", function () {
  showImage(previousIndex);
});

nextArrow.addEventListener("click", function () {
  showImage(nextIndex);
});
