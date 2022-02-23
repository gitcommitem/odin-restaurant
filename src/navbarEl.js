const createNavBar = (contDivEl) => {
    const navEl = document.createElement("nav");
    navEl.classList.add("hflex");
    
    contDivEl.appendChild(navEl);

    const h1El = document.createElement("h1");
    navEl.appendChild(h1El);

    const h1Txt = document.createTextNode("East Bay Creamery");
    h1El.appendChild(h1Txt);

    const ulEl = document.createElement("ul");
    ulEl.classList.add("hflex");

    navEl.appendChild(ulEl);

    const createLiEl = (ulEl,string) => {
        const liEl = document.createElement("li");
        liEl.id = string;
        ulEl.appendChild(liEl);
    
        const liTxt = document.createTextNode(string);
        liEl.appendChild(liTxt);
        ulEl.appendChild(liEl);
    };

    createLiEl(ulEl,"about");
    createLiEl(ulEl,"menu");
};

export {createNavBar};