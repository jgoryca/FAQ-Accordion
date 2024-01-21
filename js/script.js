"use strict";

const sectionTitle = document.querySelectorAll(".section-title");
const paragraph = document.querySelectorAll(".paragraph");
const iconPlus = document.querySelectorAll(".icon-plus");
const iconMinus = document.querySelectorAll(".icon-minus");

sectionTitle.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("heading-secondary") ||
      e.target.classList.contains("icon")
    ) {
      paragraph[i].classList.toggle("hidden");
      iconPlus[i].classList.toggle("hidden");
      iconMinus[i].classList.toggle("hidden");
    }
  });
});
