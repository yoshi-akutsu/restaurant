const loadNav = () => {
    const nav = document.getElementById("nav");
    const homeTab = document.createElement("input");
    const menuTab = document.createElement("input");
    const contactTab = document.createElement("input");
    const navBar = [homeTab, menuTab, contactTab];
    const labels = ["Home", "Menu", "Contact"];
    for (let i = 0; i < navBar.length; i++){
        navBar[i].type = "radio";
        navBar[i].id = i;
        navBar[i].name = "tab-control";
        let label = document.createElement("label");
        if (i === 0) label.classList.add("active");
        label.textContent = labels[i];
        label.setAttribute("for", i);
        nav.appendChild(navBar[i]);
        nav.appendChild(label);
    }      
};

export {loadNav as default};