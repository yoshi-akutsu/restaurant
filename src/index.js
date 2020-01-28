import loadNav from "./navLoader"
import loadHomepage from "./homepageLoader";
import loadContact from "./contactLoader";
import loadMenu from "./menuLoader";

loadNav();
loadHomepage();

function clearActive(){
    for (let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove("active");
    }
}

const tabs = document.querySelectorAll("label");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        if (tab.getAttribute("for") === "0") {
            clearActive();
            tab.classList.add("active");
            loadHomepage();
        }
        else if (tab.getAttribute("for") === "1") {
            clearActive();
            tab.classList.add("active");
            loadMenu();
        }
        else {
            clearActive();
            tab.classList.add("active");
            loadContact();
        }
    })
})