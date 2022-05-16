// Button To Up
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
  scrollUp();
};

function scrollUp() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("btn-to-top").style.display = "block";
    document.getElementById("btn-to-top").style.zIndex = "99";
  } else {
    document.getElementById("btn-to-top").style.display = "none";
  }
}

function topUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const hamburger = document.querySelector(".hamburger");
const menuNav = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
  menuNav.classList.toggle("overlay");
  hamburger.classList.toggle("overlay");
  document.body.classList.toggle("overlay");
});
