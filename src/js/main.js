const container = document.querySelector(".container");

const element = [
  { tag: "p", text: "Frase 1" },
  { tag: "p", text: "Frase 2" },
  { tag: "p", text: "Frase 3" },
  { tag: "p", text: "Frase 4" },
  { tag: "p", text: "Frase 5" },
];

const div = document.createElement("div");

for (let i = 0; i < element.length; i++) {
  const { tag, text } = element[i];
  const newTag = document.createElement(tag);

  newTag.innerHTML = text;
  div.appendChild(newTag);
}

container.appendChild(div);
