const reactElement = {
    type: "a",
    props: {
        href: "https://www.microsoft.com",
        target: "_blank",
    },
    children: "Click me to Visit microsoft",
};

const mainContainer = document.getElementById("root");

function renderElement(element, container) {
    const newEle = document.createElement(element.type);

    newEle.innerHTML = element.children;

    for (const key in element.props) {
        newEle.setAttribute(key, element.props[key]);
    }

    container.appendChild(newEle);

    return {
        message: "success",
    };
}


renderElement(reactElement, mainContainer);