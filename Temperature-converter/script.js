const type = document.getElementById("type");
const temp = document.getElementById("temp");
const submit_btn = document.getElementById("submit-btn");
const result = document.getElementById("result");

submit_btn.onclick = function(){
    let selected_type = type.value;
    let selected_temp = parseFloat(temp.value);
    if(selected_type=="select"){
        result.textContent = `Please select a conversion type`;
        return;
    }
    if(isNaN(selected_temp)){
        result.textContent = `Please give valid temp values`;
    }
    let temp_result;
    if(selected_type=="FtoC"){
        temp_result = (selected_temp - 32) * 5/9;
        result.textContent = `${temp_result.toFixed(2)}°F`
    }else{
        temp_result = (selected_temp * 9/5) + 32;
        result.textContent = `${temp_result.toFixed(2)}°C`
    }
}