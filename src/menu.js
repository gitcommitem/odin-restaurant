const createMenuPage = (contDivEl) =>{
    const sectionEl = document.createElement("section");
    sectionEl.classList.add("menu");

    contDivEl.appendChild(sectionEl);

};

export { createMenuPage };