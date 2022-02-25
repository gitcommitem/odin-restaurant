import "./style.css";

const contDivEl = document.querySelector("div#content");

const removeSection = () => {
    const sectionEl = document.querySelector("section");
    sectionEl.remove();
};

import { createNavBar } from "./navbarEl";

createNavBar(contDivEl);

import { createHeroSection } from "./heroSectionEl";

createHeroSection(contDivEl);

const navLogoEl = document.querySelector("nav h1");
navLogoEl.addEventListener("click",()=>{
    removeSection();
    createHeroSection(contDivEl);
});

import { createAboutPage } from "./about";

const aboutLiEl = document.querySelector("li#about");
aboutLiEl.addEventListener("click", () => {
    console.log("about")
    removeSection();
    createAboutPage(contDivEl);
});

import { createMenuPage } from "./menu";

const menuLiEl = document.querySelector("li#menu");
menuLiEl.addEventListener("click",()=>{
    console.log("menu")
    removeSection();
    createMenuPage(contDivEl);
});

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click",()=>{
    removeSection();
    createMenuPage(contDivEl);
});