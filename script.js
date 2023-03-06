// Get the DOM elements
const termInput = document.querySelector(".term-input");
const definition = document.querySelector(".definition");
const factInput =document.querySelector(".fact-input");
const fact = document.querySelector(".fact");
const mistake = document.querySelector(".mistake");

//Add event listeners 
termInput.addEventListener('input',updateDefinition);
factInput.addEventListener('input', updateFact);

// Update the definition based on the term input
function updateDefinition() {
    definition.textContent = termInput.value;
}

//Update the fact based on the fact input
function updateFact() {
    fact.textContent = factInput.value;
}

// Clear the inputs and categories
function clearCard() {
    termInput.value = ""
    definition.textContent = 'Definition or Explanation';
    factInput.value = ""
    fact.textContent = 'Mistake or Misconception to Avoid';
}