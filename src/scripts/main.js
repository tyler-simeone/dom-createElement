// NEED TO MAKE FN TO RETURN SECTION DOM COMPONENT FIVE TIMES
// CAN MAKE LOOP TO RUN THE FN FIVE TIMES
// THEN ATTACH EACH SECTION COMPONENT TO ITS PARENT CONTAINER VIA 
// document.appendChild();




let articleEl = document.querySelector("#messages");

// Creating DOM ele depending on arguments
const sectionComponent = (element, className, content) => {
    return `<${element} class="${className}">${content}</${element}>`
}

// Adding DOM component to parent container 5 times
const renderDomComponent = content => {
    articleEl.innerHTML += sectionComponent("section", "message", content);
}

renderDomComponent("Hello World!");
renderDomComponent("Awesomesauce");
renderDomComponent("Excellent");
renderDomComponent("Most Excellent");
renderDomComponent("cats");