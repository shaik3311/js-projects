const textarea = document.getElementById("text-input");
const wordCountDisplay = document.getElementById("word-count");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

submit.onclick = function(){
    const text = textarea.value.trim();
    const words = text === "" ? 0 : text.split(/\s+/).length;
    wordCountDisplay.textContent = words;
}
reset.onclick = function(){
    textarea.value = "";
    wordCountDisplay.textContent = 0;
}