function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "This is the poem",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
