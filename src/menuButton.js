const createButtonListener = (removeSection,createMenuPage,contDivEl) => {
    const buttonEl = document.querySelector("button");

    buttonEl.addEventListener("click",()=>{
    removeSection();
    createMenuPage(contDivEl);
    });
    
};

export { createButtonListener };
