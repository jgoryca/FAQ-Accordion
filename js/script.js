"use strict";

const links = document.getElementsByTagName("a");
const paragraph = document.querySelector(".paragraph");

const getSectionNumber = function (id) {
  return id.slice(-1);
};

const openClose = function (sectionNumber) {
  document
    .querySelector(`.paragraph--${sectionNumber}`)
    .classList.toggle("hidden");
  document
    .getElementById(`icon-plus--${sectionNumber}`)
    .classList.toggle("hidden");
  document
    .getElementById(`icon-minus--${sectionNumber}`)
    .classList.toggle("hidden");
};

Array.from(links).forEach(function (link) {
  link.addEventListener("click", function (e) {
    openClose(getSectionNumber(e.target.id));
  });
});
