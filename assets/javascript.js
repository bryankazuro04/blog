// Mobile Navbar Overlay
const navbarToggle = document.querySelector(".toggle-nav");
const overlayToggle = document.querySelector(".mobile-nav-item");

navbarToggle.onclick = function() {
  navbarToggle.classList.toggle("active");
  navbarToggle.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
  overlayToggle.classList.toggle("active");
};

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
  } else {
    document.getElementById("btn-to-top").style.display = "none";
  }
}

function topUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
