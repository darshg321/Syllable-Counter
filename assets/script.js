import {syllable} from 'https://esm.sh/syllable@5?bundle';

const textBox = document.getElementById("textBox");
const clearButton = document.getElementById("clearText");
const syllableCount = document.getElementById("syllableCount");

clearButton.addEventListener("click", () => {
    textBox.value = "";
    syllableCount.innerText = "0 Syllables";
});

textBox.addEventListener("input", () => {
    syllableCount.innerText = `${syllable(textBox.value)} Syllables`;
});