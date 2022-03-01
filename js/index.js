"use strict";

// Sidebar
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav-1__menu");
const navBtn = document.querySelector(".nav-btn");
const navLink = document.querySelectorAll(".nav-1__list > a");
const scrollBtn = document.getElementById("btnScroll");

// Toggle nav on click
hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  navBtn.classList.toggle("active");
});

// Remove nav on link click
nav.addEventListener("click", () => {
  nav.classList.remove("active");
  navBtn.classList.remove("active");
});

// Scroll btn
window.onscroll = function () {
  scrollFunction();
  scrollBtn.style.transition = "opacity 0.5s";
};

// Scroll btn appear
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Copyright
let year = new Date().getFullYear();

document.getElementById("year").textContent = year;
