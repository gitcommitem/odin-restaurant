import "./style.css";

const contDivEl = document.querySelector("div#content");

import { createNavBar } from "./navbarEl";

createNavBar(contDivEl);

import { createHeroSection } from "./heroSectionEl";

createHeroSection(contDivEl);