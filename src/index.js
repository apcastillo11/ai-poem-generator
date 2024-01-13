function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "35b7tf0955o4f9bf8cf4410eaef93791";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poem expert who writes short poems. Please generate a poem with four lines. Include a <br /> between lines. Sign your name as 'AI Poem Generator' at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
