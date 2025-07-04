const display = document.getElementById('display');


function appendToDisplay(input){
    display.value += input;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
};

function clearDisplay(){
    display.value = "";
}

function toggle() {
    if (display.value !== "") {
        display.value = String(parseFloat(display.value)*-1);
    }
}
