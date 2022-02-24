import "./style.css";

const contDivEl = document.querySelector("div#content");

import { createNavBar } from "./navbarEl";

createNavBar(contDivEl);

const removeSection = () => {
    const sectionEl = document.querySelector("section");
    sectionEl.remove();
};

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

import { createHeroSection } from "./heroSectionEl";

createHeroSection(contDivEl);

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click",()=>{
    removeSection();
    createMenuPage(contDivEl);
});