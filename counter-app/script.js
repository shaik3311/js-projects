const counterLabel = document.getElementById("counterLabel");
const decrese = document.getElementById("decrese");
const reset = document.getElementById("reset");
const increse = document.getElementById("increse");

let count = 0;

increse.onclick = function(){
    count++;
    counterLabel.textContent = count;
}
decrese.onclick = function(){
    count--;
    counterLabel.textContent = count;
}
reset.onclick = function(){
    count=0;
    counterLabel.textContent = count;
}
