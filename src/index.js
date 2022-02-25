import "./style.css";

const contDivEl = document.querySelector("div#content");

const removeSection = () => {
    const sectionEl = document.querySelector("section");
    sectionEl.remove();
};

import { createNavBar } from "./navbarEl";

createNavBar(contDivEl);

import { createMenuPage } from "./menu";
import { createHeroSection } from "./heroSectionEl";
import { createButtonListener } from "./menuButton";

createHeroSection(contDivEl);
createButtonListener(removeSection,createMenuPage,contDivEl);

//Create the index page when company logo navbar item is clicked
const navLogoEl = document.querySelector("nav h1");
navLogoEl.addEventListener("click",()=>{
    removeSection();
    createHeroSection(contDivEl);
    createButtonListener(removeSection,createMenuPage,contDivEl);
});

//Create the about page when About navbar item is clicked
import { createAboutPage } from "./about";

const aboutLiEl = document.querySelector("li#about");
aboutLiEl.addEventListener("click", () => {
    removeSection();
    createAboutPage(contDivEl);
});

//Create the Menu page when Menu navbar item is clicked
const menuLiEl = document.querySelector("li#menu");
menuLiEl.addEventListener("click",()=>{
    removeSection();
    createMenuPage(contDivEl);
});

