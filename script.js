"use strict";

// Scroll LEGACY && To reduce the logo when scrolling

let nameCompany = document.querySelector(".name__company");
let navBarLogo = document.querySelector("#nav__bar-logo");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav__bar-logo").style.width = "5rem";
  } else {
    document.getElementById("nav__bar-logo").style.width = "9rem";
  }
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    let X = window.scrollY;
    nameCompany.style.left = `${X / 6}%`;
    nameCompany.style.transform = `translateX(` + -X / 6 + `%)`;
  }
};
