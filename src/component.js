export default (text = "Hola Mundo") => {
    const element = document.createElement("div");

    element.innerHTML = text;

    return element;
};