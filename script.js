"use strict";

// window.addEventListener("DOMContentLoaded", start);
// const Project = {
//   title: "",
//   date: "",
//   description: "",
//   respository: "",
//   site: "",
//   img: "",
// };
// const projectList = [];

// async function start() {
//   console.log("start()");
//   loadJSON();
//   adjustHeader();
//   setCurrentSection();
//   console.log(checkDeviceType());
//   window.addEventListener("scroll", adjustHeader);
//   document.querySelector("#modal-flex i").addEventListener("click", closeModal);
//   document.querySelector("#modal-wrapper").addEventListener("click", closeModal);
//   document.querySelector("#burgerIcon").addEventListener("click", toggleMobileNav);
// }

// function adjustHeader() {
//   if (window.scrollY <= 10) {
//     document.querySelector(".mainHeaderLine").classList.remove("blacknav");
//   } else {
//     document.querySelector(".mainHeaderLine").classList.add("blacknav");
//   }
//   setCurrentSection();
// }

// function setCurrentSection() {
//   let aboutmeX = document.querySelector("#hero").offsetHeight;
//   let experienceX = aboutmeX + document.querySelector("#about-me").offsetHeight;
//   let projectX = experienceX + document.querySelector("#experience").offsetHeight;
//   let contactX = projectX + document.querySelector("#projects").offsetHeight;
//   let pageHeight = window.scrollY + window.innerHeight;

//   removeActiveClass();
//   if (document.documentElement.scrollHeight == pageHeight) {
//     document.querySelector("header li:nth-of-type(4)").classList.add("active");
//   } else if (window.scrollY >= contactX - 200) {
//     document.querySelector("header li:nth-of-type(4)").classList.add("active");
//   } else if (window.scrollY >= projectX - 200) {
//     document.querySelector("header li:nth-of-type(3)").classList.add("active");
//   } else if (window.scrollY >= experienceX - 200) {
//     document.querySelector("header li:nth-of-type(2)").classList.add("active");
//   } else if (window.scrollY >= aboutmeX - 200) {
//     document.querySelector("header li:nth-of-type(1)").classList.add("active");
//   }
// }

// function removeActiveClass() {
//   document.querySelector("header li:nth-of-type(1)").classList.remove("active");
//   document.querySelector("header li:nth-of-type(2)").classList.remove("active");
//   document.querySelector("header li:nth-of-type(3)").classList.remove("active");
//   document.querySelector("header li:nth-of-type(4)").classList.remove("active");
// }

// function openModal() {
//   console.log(this.dataset.id);
//   document.querySelector("#modal-wrapper").classList.remove("hidden");
//   document.querySelector("#modal-flex").classList.remove("hidden");
//   document.querySelector("#modal-wrapper").style.backgroundColor = "rgba(128, 128, 128, 0.705)";
//   fillModal(this.dataset.id);
// }

// function closeModal() {
//   document.querySelector("#modal-wrapper").classList.add("hidden");
//   document.querySelector("#modal-flex").classList.add("hidden");
//   document.querySelector("#modal-wrapper").style.backgroundColor = "";
// }

// function loadJSON() {
//   fetch("projects.json")
//     .then((response) => response.json())
//     .then((jsonData) => {
//       prepareProjects(jsonData);
//     });
// }

// function toggleMobileNav() {
//   document.querySelector(".smallNavCat").classList.toggle("hidden");
// }

// function checkDeviceType() {
//   //code from: https://www.codegrepper.com/code-examples/javascript/javascript+get+device+type
//   const ua = navigator.userAgent;
//   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
//     document.querySelector(".mainHeaderLine").style.width = "100vw";
//     return "tablet";
//   } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
//     document.querySelector(".mainHeaderLine").style.width = "100vw";
//     document.querySelectorAll(".img-wrap").forEach((project) => {
//       project.style.height = "200px";
//     });
//     return "mobile";
//   } else {
//     return "desktop";
//   }
// }
