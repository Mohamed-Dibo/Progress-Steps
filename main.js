const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
let currentProgress = 1;

next.addEventListener("click", () => {
  currentProgress++;
  if (currentProgress > circles.length) {
    currentProgress = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentProgress--;
  if (currentProgress < 1) {
    currentProgress = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (currentProgress > idx) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    if (currentProgress > 1) {
      prev.disabled = false;
      next.disabled = false;
    }
    if (currentProgress >= circles.length) {
      next.disabled = true;
    } else if (currentProgress === 1) {
      prev.disabled = true;
      next.disabled = false;
    }
    progress.style.width =
      ((currentProgress - 1) / (circles.length - 1)) * 100 + "%";
  });
}
