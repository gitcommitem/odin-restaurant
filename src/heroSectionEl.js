const createHeroSection = (contDivEl) => {
    const sectionEl = document.createElement("section");
    sectionEl.classList.add("hero","vflex");

    contDivEl.appendChild(sectionEl);

    const h2El = document.createElement("h2");
    sectionEl.appendChild(h2El);

    const h2txt = document.createTextNode("Summer seasonal flavours are back!")
    h2El.appendChild(h2txt);

    const pEl = document.createElement("p");
    sectionEl.appendChild(pEl);

    const pTxt = document.createTextNode("Our most popular summer flavours are back on the menu again")
    pEl.appendChild(pTxt);

    const buttonEl = document.createElement("button");
    sectionEl.appendChild(buttonEl);

    const buttonTxt = document.createTextNode("See our menu");
    buttonEl.appendChild(buttonTxt);
};

export { createHeroSection };