const roll_btn = document.getElementById("roll-btn");
const result_img = document.getElementById("result-img");
roll_btn.onclick = function(){
    const value = Math.floor(Math.random()*6)+1;
    result_img.innerHTML = `<img src="dice-images/${value}.jpg" alt="Dice ${value}">`;
}