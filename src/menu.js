import pineappleImg from "./imgs/pine.png";
import watermelonImg from "./imgs/watermelon.png";
import orangeImg from "./imgs/orange.png";

import vanillaImg from "./imgs/vanilla.png";
import strawberryImg from "./imgs/strawberry.png";
import chocoImg from "./imgs/choco.png";

const createMenuPage = (contDivEl) =>{

    const createFlavour = (name,imgSrc,altTxt) => {
        return {name,imgSrc,altTxt};
    };

    //Seasonal flavours
    const pineapple = createFlavour("Pineapple",pineappleImg,"Pineapple Soft Serve");
    const watermelon = createFlavour("Watermelon",watermelonImg,"Watermelon Soft Serve");
    const orange = createFlavour("Orange",orangeImg,"Orange Soft Serve");

    //Regular flavours
    const vanilla = createFlavour("Vanilla",vanillaImg,"Vanilla Soft Serve");
    const strawberry = createFlavour("Strawberry",strawberryImg,"Strawberry Soft Serve");
    const chocolate = createFlavour("Chocolate",chocoImg,"Chocolate Soft Serve");

    const navbarLogoEl = document.querySelector("nav h1")
    navbarLogoEl.classList.remove("hidden");
   
    document.body.classList.add("no-bg");

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("menu");

    contDivEl.appendChild(sectionEl);

    const createFlavourDivEl = (sectionEl,classString,h2String,flavour1,flavour2,flavour3) => {
        const divEl = document.createElement("div");
        divEl.classList.add("flavours",classString);
        sectionEl.appendChild(divEl);

        const h2El = document.createElement("h2");
        divEl.appendChild(h2El);

        const h2Txt = document.createTextNode(h2String);
        h2El.appendChild(h2Txt);

        const contDivEl = document.createElement("div");
        contDivEl.classList.add("hflex");
        divEl.appendChild(contDivEl);

        const createInnerDivEl = (contDivEl,flavour) => {
            const innerDivEl = document.createElement("div");
            innerDivEl.classList.add("vflex");
            contDivEl.appendChild(innerDivEl);

            createH3El(innerDivEl,flavour);
            createImgEl(innerDivEl,flavour);
        };

        const createH3El = (innerDivEl,flavour) => {
            const h3El = document.createElement("h3");
            innerDivEl.appendChild(h3El)

            const h3Txt = document.createTextNode(flavour.name);
            h3El.appendChild(h3Txt);
        };

        const createImgEl = (innerDivEl,flavour) => {
            const imgEl = document.createElement("img")
            imgEl.src = flavour.imgSrc;
            imgEl.alt = flavour.altTxt;
            innerDivEl.appendChild(imgEl);
        };

        createInnerDivEl(contDivEl,flavour1);
        createInnerDivEl(contDivEl,flavour2);
        createInnerDivEl(contDivEl,flavour3);

    };

    createFlavourDivEl(sectionEl,"seasonal","Seasonal Flavours",pineapple,watermelon,orange);
    createFlavourDivEl(sectionEl,"regular","Regular Flavours",vanilla,strawberry,chocolate);

};

export {createMenuPage};