import "./../scss/style.scss";

const variables = {
  name: "",
  sex: "",
};

// content abhängig von variables
const content = {
  elter: "", //-> dem Vater, der Mutter
};

const questions = document.getElementById("questions");
const story = document.getElementById("story")

function activateStory() {
  const nameInput = document.getElementById("name");
  const männlichRadio = document.getElementById("männlich");
  const weiblichRadio = document.getElementById("weiblich");

  // VARIABLEN BEFÜLLEN
  variables.name = nameInput.value;

  if (männlichRadio.checked) {
    variables.sex = "männlich";

    // Kontextabhängige content befüllung
    content.elter = "dem Vater";
  } else if (weiblichRadio.checked) {
    variables.sex = "weiblich";

    //Kontextabhängige content befüllung
    content.elter = "der Mutter";
  }

  // CONTENT ABRUFEN
  //const artikel = document.getElementById("artikel");
  const storyInner = document.getElementById("storyInner");

  const newStory = String.raw`
  In Entenhausen lebt eine Elefantenfamilie.\n
  Sie besteht aus 
  ${content.elter}
  ${variables.name},
   einem großen, lieben und fürsorglichen Tier.
  `;
  const storyMitBR = newStory.replace(/\\n/g, '<br>');
  storyInner.innerHTML = storyMitBR;

  questions.style.display = "none";
  story.style.display = "flex";
}

function resetStory() {
  const inputName = document.getElementById("name");
  const inputM = document.getElementById("männlich");
  const inputW = document.getElementById("weiblich");

  inputName.value = "";
  inputM.value = "";
  inputW.value = "";
  
  for (const key in variables) {
    if (variables.hasOwnProperty(key)) {
      variables[key] = "";
    }
  }

  for (const key in content) {
    if (content.hasOwnProperty(key)) {
      content[key] = "";
    }
  }


  questions.style.display = "flex";
  story.style.display = "none";
}

window.activateStory = activateStory;
window.resetStory = resetStory;
