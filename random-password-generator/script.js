const easy_level_btn = document.getElementById("easy-level-btn");
const medium_level_btn = document.getElementById("medium-level-btn");
const hard_level_btn  = document.getElementById("hard-level-btn");
const length_label = document.getElementById("length-label");
const length = document.getElementById("length");
const UpperCase_chars = document.getElementById("UpperCase-chars");
const LowerCase_chars = document.getElementById("LowerCase-chars");
const Numbers = document.getElementById("Numbers");
const Symbols = document.getElementById("Symbols");
const copy_btn = document.getElementById("copy-btn");
const password_output = document.getElementById("password-output");
const generate_btn = document.getElementById("generate-btn");


let options = {
    UpperCase_chars : false,
    LowerCase_chars : false,
    Numbers : false,
    Symbols : false
}

length.oninput = function(){
    length_label.textContent = `Password length : ${length.value}`;
}

generate_btn.onclick = function(){
    let length_value = parseInt(length.value);
    let available_chars = "";

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*(){}";

    if(UpperCase_chars.checked) available_chars += upper;
    if(LowerCase_chars.checked) available_chars += lower;
    if(Numbers.checked) available_chars += numbers;
    if(Symbols.checked) available_chars += symbols;

    if(available_chars.length===0){
        alert("Please select at least one field");
        return;
    }

    let password = "";
    for(let i=0;i<length_value;i++){
        password += available_chars.charAt(Math.floor(Math.random()*available_chars.length));
    }
    password_output.textContent = password;
}

easy_level_btn.onclick = function(){
    length.value = 8;
    length_label.textContent = `Password length : 8`
    options = {
        UpperCase_chars : false,
        LowerCase_chars : false,
        Numbers : true,
        Symbols : false
    }

    UpperCase_chars.checked = false;
    LowerCase_chars.checked = false;
    Numbers.checked = true;
    Symbols.checked = false;
}

medium_level_btn.onclick = function(){
    length.value = 12;
    length_label.textContent = `Password length : 12`
    options = {
        UpperCase_chars : true,
        LowerCase_chars : true,
        Numbers : true,
        Symbols : false
    }

    UpperCase_chars.checked = true;
    LowerCase_chars.checked = true;
    Numbers.checked = true;
    Symbols.checked = false;
}
hard_level_btn.onclick = function(){
    length.value = 20;
    length_label.textContent = `Password length : 20`
    options = {
        UpperCase_chars : true,
        LowerCase_chars : true,
        Numbers : true,
        Symbols : true
    }

    UpperCase_chars.checked = true;
    LowerCase_chars.checked = true;
    Numbers.checked = true;
    Symbols.checked = true;
}