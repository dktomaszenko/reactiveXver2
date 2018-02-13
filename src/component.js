export default (text = "<div class=\"alert alert-primary\" role=\"alert\">This is a primary alert—check it out!</div>") => {
    const element = document.createElement("div");

    element.innerHTML = text;

    return element;
};