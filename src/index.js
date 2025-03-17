function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "O que posso dizer sobre isso...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
