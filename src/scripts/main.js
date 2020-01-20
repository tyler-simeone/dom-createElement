const articleEl = document.querySelector("#messages");

let sectionEl_1 = document.createElement("section");
let sectionEl_2 = document.createElement("section");
let sectionEl_3 = document.createElement("section");
let sectionEl_4 = document.createElement("section");
let sectionEl_5 = document.createElement("section");

sectionEl_1.className = "message";
sectionEl_2.className = "message";
sectionEl_3.className = "message";
sectionEl_4.className = "message";
sectionEl_5.className = "message";

articleEl.appendChild(sectionEl_1);
articleEl.appendChild(sectionEl_2);
articleEl.appendChild(sectionEl_3);
articleEl.appendChild(sectionEl_4);
articleEl.appendChild(sectionEl_5);

console.log(articleEl);