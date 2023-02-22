"use strict";

window.addEventListener("DOMContentLoaded", start);

async function start() {
  setCurrentSection();
  window.addEventListener("scroll", adjustHeader);
  document.querySelector("#burgerIcon").addEventListener("click", toggleMobileNav);
}

function adjustHeader() {
  if (window.scrollY <= 10) {
    document.querySelector(".mainHeaderLine").classList.remove("blacknav");
  } else {
    document.querySelector(".mainHeaderLine").classList.add("blacknav");
  }
  setCurrentSection();
}

function setCurrentSection() {
  let projectX = document.querySelector("#hero").offsetHeight;
  let techstackX = projectX + document.querySelector("#projects").offsetHeight;
  let contactX = techstackX + document.querySelector("#techstack").offsetHeight;
  let pageHeight = window.scrollY + window.innerHeight;

  removeActiveClass();
  if (document.documentElement.scrollHeight == pageHeight) {
    document.querySelector("header li:nth-of-type(3)").classList.add("active");
  } else if (window.scrollY >= contactX - 100) {
    document.querySelector("header li:nth-of-type(3)").classList.add("active");
  } else if (window.scrollY >= techstackX - 100) {
    document.querySelector("header li:nth-of-type(2)").classList.add("active");
  } else if (window.scrollY >= projectX - 100) {
    document.querySelector("header li:nth-of-type(1)").classList.add("active");
  }
}

function removeActiveClass() {
  document.querySelector("header li:nth-of-type(1)").classList.remove("active");
  document.querySelector("header li:nth-of-type(2)").classList.remove("active");
  document.querySelector("header li:nth-of-type(3)").classList.remove("active");
}

function openModal(modalname) {
  console.log(modalname)
  document.querySelector("#modal").classList.remove("hidden");
  document.querySelector(`#modal .modal__content .${modalname}`).classList.remove("hidden");
  // document.querySelector("body").classList.add("no-scroll");
}

function closeModal() {
  document.querySelector("#modal").classList.add("hidden");
  document.querySelector(`#modal .modal__content .trump`).classList.add("hidden");
  document.querySelector(`#modal .modal__content .momondo`).classList.add("hidden");
  document.querySelector(`#modal .modal__content .sushi`).classList.add("hidden");
  // document.querySelector("body").classList.remove("no-scroll");
}

function toggleMobileNav() {
  document.querySelector(".smallNavCat").classList.toggle("hidden");
}