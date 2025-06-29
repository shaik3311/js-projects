const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const time = document.getElementById("time");
const submit_btn = document.getElementById("submit_btn");
const output = document.getElementById("output");

submit_btn.onclick = function(){
    let amt = Number(amount.value);
    let rte = Number(rate.value /100);
    let tme = Number(time.value);
    if(amt<0 || isNaN(amt)){
        amt = 0;
        amount.value = 0;
    }
    if(rte<0 || isNaN(rte)){
        rte = 0;
        rate.value = 0;
    }
    if(tme<0 || isNaN(tme)){
        tme = 0;
        time.value = 0;
    }
    

    let total = amt*Math.pow((1+rte/1),1*tme);

    output.textContent = total.toLocaleString(undefined,{style:"currency",currency:"INR"});
}