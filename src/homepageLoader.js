const loadHomepage = () => {
    const content = document.getElementById("content");
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    
    const addTextElement = (type, text) => {
        const header = document.createElement(type);
        header.textContent = text;
        content.appendChild(header);
    }
    const addImage = (path) => {
        const image = document.createElement("img");
        image.src = path;
        content.appendChild(image);
    }

    addTextElement("h1", "Yoshi's Restaurant");
    addImage("../img/sample.jpg");
    addTextElement("p", "This is a description");

};

export {loadHomepage as default};