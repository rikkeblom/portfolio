"use strict";

window.addEventListener("DOMContentLoaded", start);
const Project = {
  title: "",
  date: "",
  description: "",
  respository: "",
  site: "",
  img: "",
};
const projectList = [];

async function start() {
  console.log("start()");
  loadJSON();
  adjustHeader();
  setCurrentSection();
  window.addEventListener("scroll", adjustHeader);
  document.querySelector("#modal-flex i").addEventListener("click", closeModal);
  document.querySelector("#modal-wrapper").addEventListener("click", closeModal);
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
  let aboutmeX = document.querySelector("#hero").offsetHeight;
  let experienceX = aboutmeX + document.querySelector("#about-me").offsetHeight;
  let projectX = experienceX + document.querySelector("#experience").offsetHeight;
  let contactX = projectX + document.querySelector("#projects").offsetHeight;
  let pageHeight = window.scrollY + window.innerHeight;

  removeActiveClass();
  if (document.documentElement.scrollHeight == pageHeight) {
    document.querySelector("header li:nth-of-type(4)").classList.add("active");
  } else if (window.scrollY >= contactX - 200) {
    document.querySelector("header li:nth-of-type(4)").classList.add("active");
  } else if (window.scrollY >= projectX - 200) {
    document.querySelector("header li:nth-of-type(3)").classList.add("active");
  } else if (window.scrollY >= experienceX - 200) {
    document.querySelector("header li:nth-of-type(2)").classList.add("active");
  } else if (window.scrollY >= aboutmeX - 200) {
    document.querySelector("header li:nth-of-type(1)").classList.add("active");
  }
}

function removeActiveClass() {
  document.querySelector("header li:nth-of-type(1)").classList.remove("active");
  document.querySelector("header li:nth-of-type(2)").classList.remove("active");
  document.querySelector("header li:nth-of-type(3)").classList.remove("active");
  document.querySelector("header li:nth-of-type(4)").classList.remove("active");
}

function openModal() {
  console.log(this.dataset.id);
  document.querySelector("#modal-wrapper").classList.remove("hidden");
  document.querySelector("#modal-flex").classList.remove("hidden");
  document.querySelector("#modal-wrapper").style.backgroundColor = "rgba(128, 128, 128, 0.705)";
  fillModal(this.dataset.id);
}

function fillModal(projectID) {
  console.table(projectList[projectID]);
  document.querySelector("#modal-title").textContent = projectList[projectID].title;
  document.querySelector("#modal-date").textContent = projectList[projectID].date;
  document.querySelector("#modal-image").src = projectList[projectID].img;
  document.querySelector("#modal-description").textContent = projectList[projectID].description;
  document.querySelector("#modal-buttons a:nth-of-type(1)").href = projectList[projectID].site;
  document.querySelector("#modal-buttons a:nth-of-type(2)").href = projectList[projectID].repository;
}

function closeModal() {
  document.querySelector("#modal-wrapper").classList.add("hidden");
  document.querySelector("#modal-flex").classList.add("hidden");
  document.querySelector("#modal-wrapper").style.backgroundColor = "";
}

function loadJSON() {
  fetch("projects.json")
    .then((response) => response.json())
    .then((jsonData) => {
      prepareProjects(jsonData);
    });
}

async function prepareProjects(jsonData) {
  let i = 0;
  await jsonData.forEach((project) => {
    //creating objects for each project and pushing them to a list
    const projectObj = Object.create(Project);
    projectObj.title = project.title;
    projectObj.date = project.date;
    projectObj.description = project.description;
    projectObj.repository = project.repository;
    projectObj.site = project.site;
    projectObj.img = project.img;
    projectList.push(projectObj);

    fillProjectGallery(project, i);
    i++;
  });
  console.table(projectList);
  document.querySelectorAll(".readmore").forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
}

function fillProjectGallery(project, i) {
  // filling the project gallery,
  // grab the template
  const template = document.querySelector("template").content;
  //clone the template
  const copy = template.cloneNode(true);
  //change the content
  copy.querySelector(".img").style.backgroundImage = `url(${project.img})`;
  copy.querySelector(".project-title").textContent = project.title;
  copy.querySelector(".readmore").dataset.id = i;
  //grab the parent
  const parent = document.querySelector("#project-wrapper");
  //apend
  parent.appendChild(copy);
}

function toggleMobileNav() {
  document.querySelector(".smallNavCat").classList.toggle("hidden");
}
