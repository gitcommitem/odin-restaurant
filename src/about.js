const createAboutPage = (contDivEl) =>{

    document.body.style.backgroundImage = "none";

    const navbarLogoEl = document.querySelector("nav h1")
    navbarLogoEl.classList.add("hidden");

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("about");

    contDivEl.appendChild(sectionEl);

    const h1El = document.createElement("h1");
    sectionEl.appendChild(h1El);

    const h1Txt = document.createTextNode("East Bay Creamery");
    h1El.appendChild(h1Txt);

    const createPEl = (sectionEl,string, id) => {
        const pEl = document.createElement("p");
        if(id !== undefined){
            pEl.id = id;
        }
        sectionEl.appendChild(pEl);
    
        const pTxt = document.createTextNode(string);
        pEl.appendChild(pTxt);
    };

    createPEl(sectionEl,"We're a creamery located in the East Bay of NorCal.")
    createPEl(sectionEl,"We're best known for our soft serve icecream but we also sell various kinds of milk, cheese, and butter!")
    createPEl(sectionEl,"We are open Tuesday - Sunday from 8:30 AM to 8:30 PM.","hours")
    
};

export { createAboutPage };